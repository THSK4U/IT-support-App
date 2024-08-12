package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.IUtilisateurApi;
import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import com.itsupport.itsupport_backend.model.Mapper.UtilisateurMapper;
import com.itsupport.itsupport_backend.service.Interface.IAuthenticationService;
import com.itsupport.itsupport_backend.service.Interface.IUtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UtilisateurController implements IUtilisateurApi {

    @Autowired
    private IUtilisateurService Service;

    @Autowired
    private IAuthenticationService authenticationService;

    @Autowired
    private UtilisateurMapper Mapper;

    @Override
    public UtilisateurDTO createutilisateur(UtilisateurDTO DTO) {
        Utilisateur utilisateur = Mapper.toEntity(DTO);
        authenticationService.registerUtilisateur(utilisateur);
        return Mapper.toDTO(utilisateur);
    }

    @Override
    public void deleteutilisateur(Long id) {
        Service.delete(id);
    }

    @Override
    public List<UtilisateurDTO> getAllutilisateur() {
        return Service.getAll();
    }

    @Override
    public UtilisateurDTO getutilisateurById(Long id) {
        return Service.getUserById(id);
    }

    @Override
    public UtilisateurDTO updateutilisateur(Long id, UtilisateurDTO DTO) {
        return Service.update(id, DTO);
    }
}
