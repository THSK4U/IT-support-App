package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrateurRepository extends JpaRepository<Administrateur, Long>{

}
