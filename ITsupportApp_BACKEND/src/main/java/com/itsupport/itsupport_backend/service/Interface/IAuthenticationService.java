package com.itsupport.itsupport_backend.service.Interface;

import com.itsupport.itsupport_backend.model.Entity.*;

public interface IAuthenticationService {
    AuthenticationResponse registerUtilisateur(Utilisateur request);

    AuthenticationResponse registerTechnicien(Technicien request);

    AuthenticationResponse registerAdmin(Administrateur request);

    AuthenticationResponse authenticate(Personne request);
}