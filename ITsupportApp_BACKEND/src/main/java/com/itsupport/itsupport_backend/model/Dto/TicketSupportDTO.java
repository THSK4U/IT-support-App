package com.itsupport.itsupport_backend.model.Dto;

import com.itsupport.itsupport_backend.model.Enum.EtatTicket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
public class TicketSupportDTO {


    private Long id;
    private String description;
    private LocalDateTime dateCreation;
    private EtatTicket etat;
    private TechnicienDTO technicien;
    private UtilisateurDTO utilisateur;
}
