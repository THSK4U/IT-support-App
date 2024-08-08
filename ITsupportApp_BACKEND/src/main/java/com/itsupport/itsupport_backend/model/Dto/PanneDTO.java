package com.itsupport.itsupport_backend.model.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.itsupport.itsupport_backend.model.Entity.TicketSupport;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class PanneDTO {

    private Long id;
    private String nom;
    private String description;
    @JsonIgnore
    private List<TicketSupport> ticketSupports;
}
