package com.itsupport.itsupport_backend.model.Mapper;

import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface TechnicienMapper {

    Technicien toEntity(TechnicienDTO DTO);
    TechnicienDTO toDTO(Technicien entity);
    List<TechnicienDTO> toDTOList(List<Technicien> users);
    List<Technicien> toEntityList(List<TechnicienDTO> userDTOs);
}
