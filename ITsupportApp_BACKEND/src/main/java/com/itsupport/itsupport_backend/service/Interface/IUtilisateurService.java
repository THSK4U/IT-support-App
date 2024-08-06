package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;

import java.util.List;

public interface IUtilisateurService {
    UtilisateurDTO create(UtilisateurDTO user);
    void delete(Long utilisateurId);
    List<UtilisateurDTO> getAll();
    UtilisateurDTO getUserById(Long utilisateurId);
    UtilisateurDTO update(Long utilisateurId, UtilisateurDTO user);
}
