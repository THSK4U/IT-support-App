package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.AdministrateurDTO;
import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;

import java.util.List;

public interface ITechnicienService {
    TechnicienDTO create(TechnicienDTO technicien);
    TechnicienDTO getById(Long id);
    List<TechnicienDTO> getAll();
    TechnicienDTO update(Long id, TechnicienDTO technicien);
    void delete(Long id);
}
