package com.itsupport.itsupport_backend.model.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue(value = "Utilisateur")
public class Utilisateur extends Personne{

    @OneToMany(mappedBy = "utilisateur")
    private List<TicketSupport> tickets;
}