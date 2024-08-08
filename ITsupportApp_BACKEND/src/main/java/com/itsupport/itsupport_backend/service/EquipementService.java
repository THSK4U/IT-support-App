package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import com.itsupport.itsupport_backend.model.Entity.Equipement;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import com.itsupport.itsupport_backend.model.Enum.EtatEquipement;
import com.itsupport.itsupport_backend.model.Enum.Role;
import com.itsupport.itsupport_backend.model.Mapper.EquipementMapper;
import com.itsupport.itsupport_backend.repository.EquipementRepository;
import com.itsupport.itsupport_backend.service.Interface.IEquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EquipementService implements IEquipementService {

    @Autowired
    private EquipementMapper Mapper;

    @Autowired
    private EquipementRepository Repository;

    @Override
    public EquipementDTO create(EquipementDTO DTO) {
        Equipement entity = Mapper.toEntity(DTO);
        entity.setEtat(EtatEquipement.EN_SERVICE);
        Equipement saved = Repository.save(entity);
        return Mapper.toDTO(saved);
    }

    @Override
    public void delete(Long Id) {
        Repository.deleteById(Id);
    }

    @Override
    public List<EquipementDTO> getAll() {
        List<Equipement> panne = Repository.findAll();
        return panne.stream()
                .map(Mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EquipementDTO getById(Long Id) {
        Optional<Equipement> ticket = Repository.findById(Id);
        return ticket.map(Mapper::toDTO).orElse(null);
    }

    @Override
    public EquipementDTO update(Long Id, EquipementDTO DTO) {
        Optional<Equipement> optional = Repository.findById(Id);
        if (optional.isPresent()) {
            Equipement ticket = optional.get();
            ticket.setDescription(DTO.getDescription());
            ticket.setNom(DTO.getNom());
            ticket.setDescription(DTO.getDescription());
            ticket.setSerialnumber(DTO.getSerialnumber());
            ticket.setImageurl(DTO.getImageUrl());
            ticket.setEtat(DTO.getEtat());

            Equipement updated = Repository.save(ticket);
            return Mapper.toDTO(updated);
        } else {
            return null;
        }
    }
}
