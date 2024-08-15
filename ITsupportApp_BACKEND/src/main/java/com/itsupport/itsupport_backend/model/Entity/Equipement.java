package com.itsupport.itsupport_backend.model.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.itsupport.itsupport_backend.model.Enum.EtatEquipement;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String imageUrl;
    private String serialnumber;
    private String description;
    @Enumerated(EnumType.STRING)
    private EtatEquipement Etat;
    @Column(updatable = false)
    private LocalDateTime dateAcquisition;

    @PrePersist
    protected void onCreate() {
        dateAcquisition = LocalDateTime.now();
    }

    @OneToMany(mappedBy = "equipement",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TicketSupport> ticketSupports;
}
