package com.example.backend.Controller;

import com.example.backend.DTO.RoomDTO;
import com.example.backend.Entities.Rooms;
import com.example.backend.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/rooms/")
public class RoomController {
    private RoomService service;

    @Autowired
    public void Service(RoomService service) {
        this.service = service;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Rooms>> getAll(){
        return service.getAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Rooms> getById(@PathVariable int id){
        return service.getById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Rooms> create(@RequestBody RoomDTO dto){
        return service.create(dto);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Rooms> update(@PathVariable int id, @RequestBody Rooms rooms){
        return service.update(id, rooms);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return service.delete(id);
    }
}
