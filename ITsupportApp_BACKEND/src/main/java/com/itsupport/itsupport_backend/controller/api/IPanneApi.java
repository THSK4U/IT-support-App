package com.itsupport.itsupport_backend.controller.api;

import com.itsupport.itsupport_backend.model.Dto.PanneDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.itsupport.itsupport_backend.controller.utils.Constants.*;

public interface IPanneApi {

    @PostMapping(value = APP_ADMIN + "/panne/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    PanneDTO create(@RequestBody PanneDTO DTO);

    @DeleteMapping(value = APP_ADMIN + "/panne/delete/{id}")
    void delete(@PathVariable("id") Long id);

    @GetMapping(value = APP_ADMIN_USER + "/panne", produces = MediaType.APPLICATION_JSON_VALUE)
    List<PanneDTO> getAll();

    @GetMapping(value = APP_ADMIN + "/panne/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    PanneDTO getById(@PathVariable("id") Long id);

    @PutMapping(value = APP_ADMIN +"/panne/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    PanneDTO update(@PathVariable("id") Long id, @RequestBody PanneDTO DTO);
}
