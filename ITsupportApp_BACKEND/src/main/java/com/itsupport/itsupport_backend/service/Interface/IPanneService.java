package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.PanneDTO;

import java.util.List;

public interface IPanneService {
    PanneDTO create(PanneDTO personne);
    PanneDTO getById(Long id);
    List<PanneDTO> getAll();
    PanneDTO update(Long id, PanneDTO DTO);
    void delete(Long id);
}
