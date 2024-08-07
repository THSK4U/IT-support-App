package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Personne;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface PersonneRepository extends JpaRepository<Personne, Long> {
    Optional<Personne> findByUsername(String username);
}
