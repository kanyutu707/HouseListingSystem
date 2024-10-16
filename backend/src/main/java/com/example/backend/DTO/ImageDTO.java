package com.example.backend.DTO;

import com.example.backend.Entities.Rooms;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageDTO {
    private String image_url;
    private Rooms rooms;
    private Integer room_id;

    public Integer getRoomById(){
        return room_id;
    }
}
