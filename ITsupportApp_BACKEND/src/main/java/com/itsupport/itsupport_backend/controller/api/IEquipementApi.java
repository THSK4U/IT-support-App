package com.itsupport.itsupport_backend.controller.api;

import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.itsupport.itsupport_backend.controller.utils.Constants.*;

public interface IEquipementApi {

    @PostMapping(value = APP_ADMIN + "/Equipement/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    EquipementDTO createequipement(@RequestBody EquipementDTO DTO);

    @DeleteMapping(value = APP_ADMIN + "/Equipement/delete/{id}")
    void deleteequipement(@PathVariable("id") Long id);

    @GetMapping(value = APP_ADMIN_USER + "/Equipement", produces = MediaType.APPLICATION_JSON_VALUE)
    List<EquipementDTO> getAllequipement();

    @GetMapping(value = APP_ADMIN + "/Equipement/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    EquipementDTO getByIdequipement(@PathVariable("id") Long id);

    @PutMapping(value = APP_ADMIN +"/Equipement/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    EquipementDTO updateequipement(@PathVariable("id") Long id, @RequestBody EquipementDTO DTO);
}
