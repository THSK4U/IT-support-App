package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicienRepository extends JpaRepository<Technicien, Long> {
}
