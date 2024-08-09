package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.AdministrateurDTO;
import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.Administrateur;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import com.itsupport.itsupport_backend.model.Mapper.AdministrateurMapper;
import com.itsupport.itsupport_backend.model.Mapper.UtilisateurMapper;
import com.itsupport.itsupport_backend.repository.AdministrateurRepository;
import com.itsupport.itsupport_backend.repository.UtilisateurRepository;
import com.itsupport.itsupport_backend.service.Interface.IAdministrateurService;
import com.itsupport.itsupport_backend.service.Interface.IUtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdministrateurService implements IAdministrateurService {

    @Autowired
    private AdministrateurMapper Mapper;

    @Autowired
    private AdministrateurRepository Repository;

    @Override
    public AdministrateurDTO create(AdministrateurDTO DTO) {
        Administrateur admin = Mapper.toEntity(DTO);
        Administrateur saved = Repository.save(admin);
        return Mapper.toDTO(saved);
    }

    @Override
    public void delete(Long utilisateurId) {
        Repository.deleteById(utilisateurId);
    }


}
