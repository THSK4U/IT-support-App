package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;

import java.util.List;

public interface IEquipementService {
    EquipementDTO create(EquipementDTO personne);
    EquipementDTO getById(Long id);
    List<EquipementDTO> getAll();
    EquipementDTO update(Long id, EquipementDTO DTO);
    void delete(Long id);
}
