package com.example.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Rooms {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String room;
    private int units;
    private String description;
    private int price;
    @Enumerated(EnumType.STRING)
    private PostType postType;
    private int number_of_rooms;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "rooms")
    private Set<Images> images=new HashSet<>();

}
