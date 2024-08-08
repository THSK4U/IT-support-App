package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.TicketSupportDTO;
import com.itsupport.itsupport_backend.model.Entity.TicketSupport;
import com.itsupport.itsupport_backend.model.Mapper.TicketSupportMapper;
import com.itsupport.itsupport_backend.repository.TicketRepository;
import com.itsupport.itsupport_backend.service.Interface.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TicketService implements ITicketService {

    @Autowired
    private TicketSupportMapper Mapper;

    @Autowired
    private TicketRepository Repository;

    @Override
    public TicketSupportDTO create(TicketSupportDTO DTO) {
        TicketSupport entity = Mapper.toEntity(DTO);
        TicketSupport saved = Repository.save(entity);
        return Mapper.toDTO(saved);
    }

    @Override
    public void delete(Long Id) {
        Repository.deleteById(Id);
    }

    @Override
    public List<TicketSupportDTO> getAll() {
        List<TicketSupport> techniciens = Repository.findAll();
        return techniciens.stream()
                .map(Mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TicketSupportDTO getById(Long Id) {
        Optional<TicketSupport> ticket = Repository.findById(Id);
        return ticket.map(Mapper::toDTO).orElse(null);
    }

    @Override
    public TicketSupportDTO update(Long Id, TicketSupportDTO DTO) {
        Optional<TicketSupport> optional = Repository.findById(Id);
        if (optional.isPresent()) {
            TicketSupport ticket = optional.get();
            ticket.setDescription(DTO.getDescription());
            ticket.setEtat(DTO.getEtat());
            ticket.setPanne(DTO.getPanne());
            ticket.setEquipement(DTO.getEquipement());
            ticket.setTechnicien(DTO.getTechnicien());

            TicketSupport updated = Repository.save(ticket);
            return Mapper.toDTO(updated);
        } else {
            return null;
        }
    }
}
