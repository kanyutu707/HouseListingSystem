package com.example.backend.DTO;

import com.example.backend.Entities.PostType;
import com.example.backend.Entities.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RoomDTO {
    private String room;
    private int units;
    private String description;
    private int price;
    @Enumerated(EnumType.STRING)
    private PostType postType;
    private int number_of_rooms;
    private User user;
    private Integer owner_id;

    public  Integer getOwnerId(){
        return  owner_id;
    }
}
