package com.itsupport.itsupport_backend.model.Mapper;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import lombok.Data;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface UtilisateurMapper {

        Utilisateur toEntity(UtilisateurDTO DTO);
        UtilisateurDTO toDTO(Utilisateur entity);
        List<UtilisateurDTO> toDTOList(List<Utilisateur> users);
        List<Utilisateur> toEntityList(List<UtilisateurDTO> userDTOs);
}
