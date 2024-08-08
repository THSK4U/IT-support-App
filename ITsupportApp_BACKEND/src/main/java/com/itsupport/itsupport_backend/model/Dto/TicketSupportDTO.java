package com.itsupport.itsupport_backend.model.Dto;

import com.itsupport.itsupport_backend.model.Entity.Equipement;
import com.itsupport.itsupport_backend.model.Entity.Panne;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import com.itsupport.itsupport_backend.model.Enum.EtatTicket;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TicketSupportDTO {

    private Long id;
    private String description;
    private LocalDateTime dateCreation;
    private EtatTicket etat;
    private Technicien technicien;
    private Utilisateur utilisateur;
    private Panne panne;
    private Equipement equipement;
}
