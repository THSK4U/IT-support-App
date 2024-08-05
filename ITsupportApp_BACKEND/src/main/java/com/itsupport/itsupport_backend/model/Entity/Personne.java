package com.itsupport.itsupport_backend.model.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@MappedSuperclass
public class Personne {
    private String username;
    private String email;
    private String motdepasse;

}
