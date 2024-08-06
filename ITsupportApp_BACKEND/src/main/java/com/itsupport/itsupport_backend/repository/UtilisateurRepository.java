package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {


}
