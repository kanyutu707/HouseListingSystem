package com.example.backend.Service;

import com.example.backend.DTO.RoomDTO;
import com.example.backend.Entities.Rooms;
import com.example.backend.Entities.User;
import com.example.backend.Repository.RoomRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoomService {
    private RoomRepository repository;
    private final EntityManager entityManager;

    @Autowired
    public void Repository(RoomRepository repository) {
        this.repository = repository;
    }

    public ResponseEntity<List<Rooms>> getAll(){
        List<Rooms> rooms=repository.findAll();
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    public ResponseEntity<Rooms> getById(int id){
        Optional<Rooms> rooms=repository.findById(id);
        return rooms.map(room ->new ResponseEntity<>(room, HttpStatus.OK)).orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Rooms> create(RoomDTO dto){
        User user=null;
        if(dto.getOwner_id()!=null && dto.getOwnerId()!=0){
            user=entityManager.find(User.class, dto.getOwnerId());
        }
        if(user!=null && !entityManager.contains(user)){
            user=entityManager.merge(user);
        }
        var rooms=Rooms.builder()
                .room(dto.getRoom())
                .price(dto.getPrice())
                .postType(dto.getPostType())
                .number_of_rooms(dto.getNumber_of_rooms())
                .units(dto.getUnits())
                .description(dto.getDescription())
                .user(user)
                .build();
        Rooms saveRooms=repository.save(rooms);
        return new ResponseEntity<>(saveRooms, HttpStatus.CREATED);
    }

    public ResponseEntity<Rooms> update(int id, Rooms Room){
        Optional<Rooms> rooms=repository.findById(id);
        if(rooms.isPresent()){
            Rooms room=rooms.get();
            room.setRoom(Room.getRoom());
            room .setPrice(Room.getPrice());
            room.setPostType(Room.getPostType());
            room.setNumber_of_rooms(Room.getNumber_of_rooms());
            room.setUnits(Room.getUnits());
            repository.save(room);

            return new ResponseEntity<>(room, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    public ResponseEntity<Void> delete(int id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
