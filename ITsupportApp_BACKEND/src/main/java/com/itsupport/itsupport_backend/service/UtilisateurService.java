package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import com.itsupport.itsupport_backend.model.Mapper.UtilisateurMapper;
import com.itsupport.itsupport_backend.repository.UtilisateurRepository;

import com.itsupport.itsupport_backend.service.Interface.IUtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UtilisateurService implements IUtilisateurService {

    @Autowired
    private UtilisateurMapper utilisateurMapper;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public UtilisateurDTO create(UtilisateurDTO userDTO) {
        Utilisateur utilisateur = utilisateurMapper.toEntity(userDTO);
        Utilisateur savedUtilisateur = utilisateurRepository.save(utilisateur);
        return utilisateurMapper.toDTO(savedUtilisateur);
    }

    @Override
    public void delete(Long utilisateurId) {
        utilisateurRepository.deleteById(utilisateurId);
    }

    @Override
    public List<UtilisateurDTO> getAll() {
        List<Utilisateur> utilisateurs = utilisateurRepository.findAll();
        return utilisateurs.stream()
                .map(utilisateurMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UtilisateurDTO getUserById(Long utilisateurId) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findById(utilisateurId);
        return utilisateur.map(utilisateurMapper::toDTO).orElse(null);
    }

    @Override
    public UtilisateurDTO update(Long utilisateurId, UtilisateurDTO userDTO) {
        Optional<Utilisateur> optionalUtilisateur = utilisateurRepository.findById(utilisateurId);
        if (optionalUtilisateur.isPresent()) {
            Utilisateur utilisateur = optionalUtilisateur.get();
            utilisateur.setUsername(userDTO.getUsername());
            utilisateur.setEmail(userDTO.getEmail());
            utilisateur.setPassword(userDTO.getPassword());

            Utilisateur updatedUtilisateur = utilisateurRepository.save(utilisateur);
            return utilisateurMapper.toDTO(updatedUtilisateur);
        } else {
            return null;
        }
    }
}
