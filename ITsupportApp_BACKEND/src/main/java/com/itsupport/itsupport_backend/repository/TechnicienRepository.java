package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Personne;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TechnicienRepository extends JpaRepository<Technicien, Long> {
    Optional<Personne> findByUsername(String username);

}
