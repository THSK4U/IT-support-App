package com.itsupport.itsupport_backend.model.Mapper;

import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import com.itsupport.itsupport_backend.model.Entity.Equipement;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface EquipementMapper {

    Equipement toEntity(EquipementDTO DTO);
    EquipementDTO toDTO(Equipement entity);
    List<EquipementDTO> toDTOList(List<Equipement> users);
    List<Equipement> toEntityList(List<EquipementDTO> userDTOs);
}
