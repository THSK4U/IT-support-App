package com.itsupport.itsupport_backend.model.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.itsupport.itsupport_backend.model.Enum.EtatEquipement;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Equipement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private EtatEquipement Etet;
    @Column(updatable = false)
    private LocalDateTime dateAcquisition;

    @PrePersist
    protected void onCreate() {
        dateAcquisition = LocalDateTime.now();
    }

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TicketSupport> ticketSupports;
}
