package com.itsupport.itsupport_backend.model.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.itsupport.itsupport_backend.model.Entity.TicketSupport;
import com.itsupport.itsupport_backend.model.Enum.EtatEquipement;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class EquipementDTO {

    private Long id;
    private String nom;
    private String description;
    private EtatEquipement Etet;
    private LocalDateTime dateAcquisition;
    @JsonIgnore
    private List<TicketSupport> ticketSupports;
}
