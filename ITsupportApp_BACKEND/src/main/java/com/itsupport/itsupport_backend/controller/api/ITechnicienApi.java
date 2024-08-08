package com.itsupport.itsupport_backend.controller.api;

import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import static com.itsupport.itsupport_backend.controller.utils.Constants.APP_ADMIN;

import java.util.List;

public interface ITechnicienApi {

    @PostMapping(value = APP_ADMIN + "/techniciens/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    TechnicienDTO createTechnicien(@RequestBody TechnicienDTO technicienDTO);

    @DeleteMapping(value = APP_ADMIN + "/techniciens/delete/{id}")
    void deleteTechnicien(@PathVariable("id") Long id);

    @GetMapping(value = APP_ADMIN + "/techniciens", produces = MediaType.APPLICATION_JSON_VALUE)
    List<TechnicienDTO> getAllTechniciens();

    @GetMapping(value = APP_ADMIN + "/techniciens/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    TechnicienDTO getTechnicienById(@PathVariable("id") Long id);

    @PutMapping(value = APP_ADMIN +"/techniciens/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    TechnicienDTO updateTechnicien(@PathVariable("id") Long id, @RequestBody TechnicienDTO technicienDTO);
}
