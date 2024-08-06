package com.itsupport.itsupport_backend.model.Dto;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public class PersonneDTO {
    private String username;
    private String email;
    private String motdepasse;

}
