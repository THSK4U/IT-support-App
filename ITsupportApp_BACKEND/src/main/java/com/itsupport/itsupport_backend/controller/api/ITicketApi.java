package com.itsupport.itsupport_backend.controller.api;

import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.itsupport.itsupport_backend.controller.utils.Constants.APP_ADMIN;
import static com.itsupport.itsupport_backend.controller.utils.Constants.APP_USER;

public interface ITicketApi {

    @PostMapping(value =  APP_USER +"/Ticket/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    TicketSupportDTO create(@RequestBody TicketSupportDTO DTO);

    @DeleteMapping(value = APP_ADMIN + "/Ticket/delete/{id}")
    void delete(@PathVariable("id") Long id);

    @GetMapping(value = "/Ticket", produces = MediaType.APPLICATION_JSON_VALUE)
    List<TicketSupportDTO> getAll();

    @GetMapping(value = APP_ADMIN + "/Ticket/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    TicketSupportDTO getById(@PathVariable("id") Long id);

    @PutMapping(value = APP_ADMIN +"/Ticket/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    TicketSupportDTO update(@PathVariable("id") Long id, @RequestBody TicketSupportDTO DTO);
}
