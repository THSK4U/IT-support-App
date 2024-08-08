package com.itsupport.itsupport_backend.model.Mapper;


import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;
import com.itsupport.itsupport_backend.model.Entity.TicketSupport;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TicketSupportMapper {

    TicketSupport toEntity(TicketSupportDTO DTO);
    TicketSupportDTO toDTO(TicketSupport entity);
    List<TicketSupportDTO> toDTOList(List<TicketSupport> Ticket);
    List<TicketSupport> toEntityList(List<TicketSupportDTO> DTOs);
}
