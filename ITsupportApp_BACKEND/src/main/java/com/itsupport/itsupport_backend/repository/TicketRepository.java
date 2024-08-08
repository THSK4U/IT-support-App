package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.TicketSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<TicketSupport, Long> {

}
