package com.itsupport.itsupport_backend.model.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
public class TechnicienDTO extends PersonneDTO {
    private List<TicketSupportDTO> tickets;
}
