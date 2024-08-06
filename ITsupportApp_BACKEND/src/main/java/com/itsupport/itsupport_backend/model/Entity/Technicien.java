package com.itsupport.itsupport_backend.model.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue(value = "Technicien")
public class Technicien extends Personne{

    @OneToMany(mappedBy = "technicien")
    private List<TicketSupport> tickets;
}
