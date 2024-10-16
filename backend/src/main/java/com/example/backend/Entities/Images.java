package com.example.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String image_url;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Rooms rooms;
}
