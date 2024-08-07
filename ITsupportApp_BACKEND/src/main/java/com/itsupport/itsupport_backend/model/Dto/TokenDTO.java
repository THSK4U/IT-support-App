package com.itsupport.itsupport_backend.model.Dto;

import com.itsupport.itsupport_backend.model.Entity.Personne;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class TokenDTO {

    private Integer id;
    private String token;
    private Personne user;
}