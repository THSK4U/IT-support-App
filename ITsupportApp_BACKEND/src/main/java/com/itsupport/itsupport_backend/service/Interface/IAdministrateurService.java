package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.AdministrateurDTO;

import java.util.List;

public interface IAdministrateurService {
    AdministrateurDTO create(AdministrateurDTO DTO);
    void delete(Long Id);
}
