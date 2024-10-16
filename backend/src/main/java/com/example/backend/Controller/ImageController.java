package com.example.backend.Controller;

import com.example.backend.DTO.ImageDTO;
import com.example.backend.Entities.Images;
import com.example.backend.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/Images")
public class ImageController {
    private ImageService service;

    @Autowired
    public void Service(ImageService service) {
        this.service = service;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Images>> getAll(){
        return service.getAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Images> getById(@PathVariable int id){
        return service.getById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Images> create(@RequestBody ImageDTO dto){
        return service.create(dto);
    }

    @PostMapping(value = "/uploadMultiple", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<List<Images>> uploadMultipleImages(
            @RequestParam("files") List<MultipartFile> files,
            @RequestParam("room_id") Integer roomId) {
        return service.createMultiple(files, roomId);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Images> update(@PathVariable int id, @RequestBody Images images){
        return service.update(id, images);
    }

    @GetMapping("/getByRoomId/{roomId}")
    public ResponseEntity<List<Images>> getByRoomId(@PathVariable int roomId) {
        return service.getByRoomId(roomId);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return service.delete(id);
    }
}