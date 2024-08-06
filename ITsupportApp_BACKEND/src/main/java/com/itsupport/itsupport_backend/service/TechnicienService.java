package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import com.itsupport.itsupport_backend.model.Mapper.TechnicienMapper;
import com.itsupport.itsupport_backend.repository.TechnicienRepository;
import com.itsupport.itsupport_backend.service.Interface.ITechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TechnicienService implements ITechnicienService {

    @Autowired
    private TechnicienMapper Mapper;

    @Autowired
    private TechnicienRepository Repository;

    @Override
    public TechnicienDTO create(TechnicienDTO userDTO) {
        Technicien technicien = Mapper.toEntity(userDTO);
        Technicien saved = Repository.save(technicien);
        return Mapper.toDTO(saved);
    }

    @Override
    public void delete(Long utilisateurId) {
        Repository.deleteById(utilisateurId);
    }

    @Override
    public List<TechnicienDTO> getAll() {
        List<Technicien> techniciens = Repository.findAll();
        return techniciens.stream()
                .map(Mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TechnicienDTO getById(Long utilisateurId) {
        Optional<Technicien> technicien = Repository.findById(utilisateurId);
        return technicien.map(Mapper::toDTO).orElse(null);
    }

    @Override
    public TechnicienDTO update(Long Id, TechnicienDTO DTO) {
        Optional<Technicien> optionalUtilisateur = Repository.findById(Id);
        if (optionalUtilisateur.isPresent()) {
            Technicien technicien = optionalUtilisateur.get();
            technicien.setUsername(DTO.getUsername());
            technicien.setEmail(DTO.getEmail());
            technicien.setPassword(DTO.getPassword());

            Technicien updated = Repository.save(technicien);
            return Mapper.toDTO(updated);
        } else {
            return null;
        }
    }
}
