package com.example.backend.Repository;

import com.example.backend.Entities.Images;
import com.example.backend.Entities.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageRepository extends JpaRepository<Images, Integer> {
    List<Images> findByRooms(Rooms room);

}