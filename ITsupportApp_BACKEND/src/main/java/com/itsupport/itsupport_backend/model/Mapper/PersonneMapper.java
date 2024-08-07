package com.itsupport.itsupport_backend.model.Mapper;

import com.itsupport.itsupport_backend.model.Dto.PersonneDTO;
import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Entity.Personne;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface PersonneMapper {

    Personne toEntity(PersonneDTO DTO);
    PersonneDTO toDTO(Personne entity);
    List<PersonneDTO> toDTOList(List<Personne> users);
    List<Personne> toEntityList(List<PersonneDTO> userDTOs);
}
