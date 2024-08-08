package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.Utilisateur;
import com.itsupport.itsupport_backend.model.Mapper.UtilisateurMapper;
import com.itsupport.itsupport_backend.repository.UtilisateurRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UtilisateurServiceTest {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private UtilisateurMapper utilisateurMapper;

    @Autowired
    private UtilisateurService utilisateurService;

    private Utilisateur utilisateur;
    private UtilisateurDTO utilisateurDTO;

    @BeforeEach
    public void setUp() {
        utilisateur = new Utilisateur();
        utilisateur.setId(1L);
        utilisateur.setUsername("testuser");
        utilisateur.setEmail("testuser@example.com");
        utilisateur.setPassword("123");

        utilisateurDTO = new UtilisateurDTO();
        utilisateurDTO.setId(1L);
        utilisateurDTO.setUsername("testuser");
        utilisateurDTO.setEmail("testuser@example.com");
        utilisateurDTO.setPassword("123");

        utilisateurRepository.save(utilisateur);
    }

    @Test
    public void testCreateUser() {
        UtilisateurDTO result = utilisateurService.create(utilisateurDTO);

        assertNotNull(result);
        assertEquals(utilisateurDTO.getUsername(), result.getUsername());
        assertEquals(utilisateurDTO.getEmail(), result.getEmail());
        assertEquals(utilisateurDTO.getPassword(), result.getPassword());
    }
}
