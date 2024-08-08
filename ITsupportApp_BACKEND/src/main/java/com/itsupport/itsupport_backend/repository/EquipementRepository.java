package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Equipement;
import com.itsupport.itsupport_backend.model.Entity.Panne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipementRepository extends JpaRepository<Equipement, Long>{

}
