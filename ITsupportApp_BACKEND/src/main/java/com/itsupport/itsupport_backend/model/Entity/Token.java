package com.itsupport.itsupport_backend.model.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "token")
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String token;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Personne user;
}