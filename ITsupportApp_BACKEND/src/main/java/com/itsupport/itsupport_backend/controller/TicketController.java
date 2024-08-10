package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.IEquipementApi;
import com.itsupport.itsupport_backend.controller.api.ITicketApi;
import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;
import com.itsupport.itsupport_backend.model.Mapper.EquipementMapper;
import com.itsupport.itsupport_backend.model.Mapper.TicketSupportMapper;
import com.itsupport.itsupport_backend.service.Interface.IEquipementService;
import com.itsupport.itsupport_backend.service.Interface.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController implements ITicketApi {

    @Autowired
    private ITicketService Service;

    @Override
    public TicketSupportDTO create(TicketSupportDTO DTO) {
        return Service.create(DTO);
    }

    @Override
    public void delete(Long id) {
        Service.delete(id);
    }

    @Override
    public List<TicketSupportDTO> getAll() {
        return Service.getAll();
    }

    @Override
    public TicketSupportDTO getById(Long id) {
        return Service.getById(id);
    }

    @Override
    public TicketSupportDTO update(Long id, TicketSupportDTO DTO) {
        return Service.update(id, DTO);
    }

    @Override
    public TicketSupportDTO updateEtat(Long id, TicketSupportDTO DTO) { return Service.updateEtat(id, DTO); }

    @Override
    public List<TicketSupportDTO> getTicketsByUsername(String username) { return Service.findAllByUsername(username);}


}
