package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.PersonneDTO;
import com.itsupport.itsupport_backend.model.Entity.Personne;
import com.itsupport.itsupport_backend.model.Mapper.PersonneMapper;
import com.itsupport.itsupport_backend.repository.PersonneRepository;
import com.itsupport.itsupport_backend.service.Interface.IPersonneService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PersonneService implements IPersonneService, UserDetailsService {

    @Autowired
    private PersonneMapper Mapper;

    @Autowired
    private PersonneRepository Repository;

    @Override
    public PersonneDTO create(PersonneDTO personne) {
        Personne technicien = Mapper.toEntity(personne);
        Personne saved = Repository.save(technicien);
        return Mapper.toDTO(saved);
    }

    @Override
    public PersonneDTO getById(Long id) {
        Optional<Personne> personne = Repository.findById(id);
        return personne.map(Mapper::toDTO).orElse(null);
    }

    @Override
    public List<PersonneDTO> getAll() {
        List<Personne> personne = Repository.findAll();
        return personne.stream()
                .map(Mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PersonneDTO update(Long id, PersonneDTO DTO) {
        Optional<Personne> optional = Repository.findById(id);
        if (optional.isPresent()) {
            Personne personne = optional.get();
            personne.setUsername(DTO.getUsername());
            personne.setEmail(DTO.getEmail());
            personne.setPassword(DTO.getPassword());

            Personne updated = Repository.save(personne);
            return Mapper.toDTO(updated);
        } else {
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        Repository.deleteById(id);
    }

    // For Spring Security
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return Repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}