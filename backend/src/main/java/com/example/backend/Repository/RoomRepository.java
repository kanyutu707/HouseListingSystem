package com.example.backend.Repository;

import com.example.backend.Entities.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Rooms, Integer> {
}
