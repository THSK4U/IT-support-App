package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;

import java.util.List;

public interface ITicketService {
    TicketSupportDTO create(TicketSupportDTO personne);
    TicketSupportDTO getById(Long id);
    List<TicketSupportDTO> getAll();
    TicketSupportDTO update(Long id, TicketSupportDTO DTO);
    void delete(Long id);
    TicketSupportDTO updateEtat(Long id, TicketSupportDTO DTO);

}
