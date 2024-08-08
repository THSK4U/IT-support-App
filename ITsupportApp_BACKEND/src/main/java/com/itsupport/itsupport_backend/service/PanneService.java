package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.PanneDTO;
import com.itsupport.itsupport_backend.model.Entity.Panne;
import com.itsupport.itsupport_backend.model.Mapper.PanneMapper;
import com.itsupport.itsupport_backend.repository.PanneRepository;
import com.itsupport.itsupport_backend.service.Interface.IPanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PanneService implements IPanneService {

    @Autowired
    private PanneMapper Mapper;

    @Autowired
    private PanneRepository Repository;

    @Override
    public PanneDTO create(PanneDTO DTO) {
        Panne entity = Mapper.toEntity(DTO);
        Panne saved = Repository.save(entity);
        return Mapper.toDTO(saved);
    }

    @Override
    public void delete(Long Id) {
        Repository.deleteById(Id);
    }

    @Override
    public List<PanneDTO> getAll() {
        List<Panne> panne = Repository.findAll();
        return panne.stream()
                .map(Mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PanneDTO getById(Long Id) {
        Optional<Panne> ticket = Repository.findById(Id);
        return ticket.map(Mapper::toDTO).orElse(null);
    }

    @Override
    public PanneDTO update(Long Id, PanneDTO DTO) {
        Optional<Panne> optional = Repository.findById(Id);
        if (optional.isPresent()) {
            Panne ticket = optional.get();
            ticket.setDescription(DTO.getDescription());
            ticket.setNom(DTO.getNom());
            ticket.setDescription(DTO.getDescription());

            Panne updated = Repository.save(ticket);
            return Mapper.toDTO(updated);
        } else {
            return null;
        }
    }
}
