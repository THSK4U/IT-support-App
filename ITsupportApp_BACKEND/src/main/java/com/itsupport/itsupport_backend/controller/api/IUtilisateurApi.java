package com.itsupport.itsupport_backend.controller.api;

import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.itsupport.itsupport_backend.controller.utils.Constants.APP_ADMIN;

public interface IUtilisateurApi {

    @PostMapping(value = APP_ADMIN + "/utilisateur/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    UtilisateurDTO createTechnicien(@RequestBody UtilisateurDTO utilisateurDTO);

    @DeleteMapping(value = APP_ADMIN + "/utilisateur/delete/{id}")
    void deleteTechnicien(@PathVariable("id") Long id);

    @GetMapping(value = APP_ADMIN + "/utilisateur", produces = MediaType.APPLICATION_JSON_VALUE)
    List<UtilisateurDTO> getAllTechniciens();

    @GetMapping(value = APP_ADMIN + "/utilisateur/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    UtilisateurDTO getTechnicienById(@PathVariable("id") Long id);

    @PutMapping(value = APP_ADMIN +"/utilisateur/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    UtilisateurDTO updateTechnicien(@PathVariable("id") Long id, @RequestBody UtilisateurDTO utilisateurDTO);
}
