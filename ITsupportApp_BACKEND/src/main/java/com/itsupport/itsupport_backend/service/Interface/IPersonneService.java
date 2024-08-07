package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.PersonneDTO;
import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;

import java.util.List;

public interface IPersonneService {
    PersonneDTO create(PersonneDTO personne);
    PersonneDTO getById(Long id);
    List<PersonneDTO> getAll();
    PersonneDTO update(Long id, PersonneDTO DTO);
    void delete(Long id);
}
