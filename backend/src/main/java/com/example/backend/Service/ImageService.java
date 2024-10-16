package com.example.backend.Service;

import com.example.backend.DTO.ImageDTO;
import com.example.backend.Entities.Images;
import com.example.backend.Entities.Rooms;
import com.example.backend.Repository.ImageRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {
    private ImageRepository repository;
    private final EntityManager entityManager;
    private final String UPLOAD_DIRECTORY = "uploads";

    @Autowired
    public void Repository(ImageRepository repository) {
        this.repository = repository;
    }

    public ResponseEntity<List<Images>> getAll() {
        List<Images> images = repository.findAll();
        return new ResponseEntity<>(images, HttpStatus.OK);
    }

    public ResponseEntity<Images> getById(int id) {
        Optional<Images> images = repository.findById(id);
        return images.map(image -> new ResponseEntity<>(image, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Images> create(ImageDTO dto) {
        Rooms rooms = null;
        if (dto.getRoom_id() != null && dto.getRoomById() != 0) {
            rooms = entityManager.find(Rooms.class, dto.getRoomById());
        }
        if (rooms != null && !entityManager.contains(rooms)) {
            rooms = entityManager.merge(rooms);
        }
        var images = Images.builder()
                .image_url(dto.getImage_url())
                .rooms(rooms)
                .build();
        Images image = repository.save(images);
        return new ResponseEntity<>(image, HttpStatus.CREATED);
    }

    public ResponseEntity<List<Images>> createMultiple(List<MultipartFile> files, Integer roomId) {
        Rooms room = entityManager.find(Rooms.class, roomId);
        if (room == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Images> savedImages = new ArrayList<>();

        for (MultipartFile file : files) {
            try {
                String imageUrl = saveImage(file);
                Images image = Images.builder()
                        .image_url(imageUrl)
                        .rooms(room)
                        .build();
                savedImages.add(repository.save(image));
            } catch (IOException e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<>(savedImages, HttpStatus.CREATED);
    }

    private String saveImage(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(UPLOAD_DIRECTORY);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate a unique filename
        String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(filename);

        // Save the file
        Files.copy(file.getInputStream(), filePath);

        // Return the URL
        return "/uploads/" + filename;
    }

    public ResponseEntity<List<Images>> getByRoomId(int roomId) {
        Rooms room = entityManager.find(Rooms.class, roomId);
        if (room == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Images> images = repository.findByRooms(room);
        return new ResponseEntity<>(images, HttpStatus.OK);
    }


    public ResponseEntity<Images> update(int id, Images image) {
        Optional<Images> optionalImages = repository.findById(id);
        if (optionalImages.isPresent()) {
            Images images = optionalImages.get();
            images.setImage_url(image.getImage_url());
            images.setRooms(image.getRooms());
            repository.save(images);
            return new ResponseEntity<>(images, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> delete(int id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}