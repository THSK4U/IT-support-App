package com.itsupport.itsupport_backend.model.Mapper;

import com.itsupport.itsupport_backend.model.Dto.PanneDTO;
import com.itsupport.itsupport_backend.model.Entity.Panne;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface PanneMapper {

    Panne toEntity(PanneDTO DTO);
    PanneDTO toDTO(Panne entity);
    List<PanneDTO> toDTOList(List<Panne> users);
    List<Panne> toEntityList(List<PanneDTO> userDTOs);
}
