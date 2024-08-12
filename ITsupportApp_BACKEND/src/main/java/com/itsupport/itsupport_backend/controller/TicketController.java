package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.ITicketApi;
import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;
import com.itsupport.itsupport_backend.service.Interface.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController implements ITicketApi {

    @Autowired
    private ITicketService Service;

    @Override
    public TicketSupportDTO createTicket(TicketSupportDTO DTO) {
        return Service.create(DTO);
    }

    @Override
    public void deleteTicket(Long id) {
        Service.delete(id);
    }

    @Override
    public List<TicketSupportDTO> getAllTicket() {
        return Service.getAll();
    }

    @Override
    public TicketSupportDTO getByIdTicket(Long id) {
        return Service.getById(id);
    }

    @Override
    public TicketSupportDTO updateTicket(Long id, TicketSupportDTO DTO) {
        return Service.update(id, DTO);
    }

    @Override
    public TicketSupportDTO updateEtatTicket(Long id, TicketSupportDTO DTO) { return Service.updateEtat(id, DTO); }

    @Override
    public List<TicketSupportDTO> getTicketsByUsername(String username) { return Service.findAllByUsername(username);}


}
