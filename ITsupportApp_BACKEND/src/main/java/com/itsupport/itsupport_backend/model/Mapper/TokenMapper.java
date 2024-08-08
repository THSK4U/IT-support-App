package com.itsupport.itsupport_backend.model.Mapper;

import com.itsupport.itsupport_backend.model.Dto.AdministrateurDTO;
import com.itsupport.itsupport_backend.model.Dto.TokenDTO;
import com.itsupport.itsupport_backend.model.Entity.Administrateur;
import com.itsupport.itsupport_backend.model.Entity.Token;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TokenMapper {

    Token toEntity(TokenDTO DTO);
    TokenDTO toDTO(Token entity);
    List<TokenDTO> toDTOList(List<Token> tokens);
    List<Token> toEntityList(List<TokenDTO> DTOs);

}
