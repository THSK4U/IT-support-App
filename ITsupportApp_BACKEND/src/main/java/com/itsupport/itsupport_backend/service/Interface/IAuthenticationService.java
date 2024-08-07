package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Dto.PersonneDTO;
import com.itsupport.itsupport_backend.model.Entity.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.List;

public interface IAuthenticationService {
    AuthenticationResponse registerUtilisateur(Utilisateur request);

    AuthenticationResponse registerTechnicien(Technicien request);

    AuthenticationResponse authenticate(Personne request);
}