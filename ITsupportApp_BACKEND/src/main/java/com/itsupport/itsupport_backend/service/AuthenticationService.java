package com.itsupport.itsupport_backend.service;

import com.itsupport.itsupport_backend.model.Dto.UtilisateurDTO;
import com.itsupport.itsupport_backend.model.Entity.*;
import com.itsupport.itsupport_backend.model.Enum.Role;
import com.itsupport.itsupport_backend.model.Mapper.PersonneMapper;
import com.itsupport.itsupport_backend.model.Mapper.TechnicienMapper;
import com.itsupport.itsupport_backend.model.Mapper.UtilisateurMapper;
import com.itsupport.itsupport_backend.repository.PersonneRepository;
import com.itsupport.itsupport_backend.repository.TechnicienRepository;
import com.itsupport.itsupport_backend.repository.TokenRepository;
import com.itsupport.itsupport_backend.repository.UtilisateurRepository;
import com.itsupport.itsupport_backend.service.Interface.IAuthenticationService;
import com.itsupport.itsupport_backend.service.securityService.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {

    //DAO
    private final PersonneRepository repository;
    private final UtilisateurRepository utilisateurRepository;
    private final TechnicienRepository technicienRepository;
    private final TokenRepository tokenRepository;
//
        //Mapper
    private final PersonneMapper userMapper;
    private final UtilisateurMapper utilisateurMapper;
    private final TechnicienMapper technicienMapper;
    //
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse registerUtilisateur(Utilisateur request) {
        // vérifiez si l'utilisateur existe déjà. s'il existe, authentifier l'utilisateur

        if (utilisateurRepository.findByUsername(request.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "Utilisateur déja existe");
        }

        Utilisateur user = new Utilisateur();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.valueOf("USER"));

        user = utilisateurRepository.save(user);

        String jwt = jwtService.generateToken(user);

        saveUserToken(jwt, user);

        return new AuthenticationResponse(jwt, "Utilisateur registration was successful");
    }

    @Override
    public AuthenticationResponse registerTechnicien(Technicien request) {
        // vérifiez si l'utilisateur existe déjà. s'il existe, authentifier l'utilisateur
        if (technicienRepository.findByUsername(request.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "Technicien déjà exist");
        }

        Technicien user = new Technicien();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.valueOf("TECH"));

        user = technicienRepository.save(user);

        String jwt = jwtService.generateToken(user);

        saveUserToken(jwt, user);

        return new AuthenticationResponse(jwt, "Technicien registration was successful");
    }

    @Override
    public AuthenticationResponse authenticate(Personne request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        Personne user = repository.findByUsername(request.getUsername()).orElseThrow();
        String jwt = jwtService.generateToken(user);

        saveUserToken(jwt, user);

        return new AuthenticationResponse(jwt, "User login was successful");
    }


    private void saveUserToken(String jwt, Personne user) {
        Token token = new Token();
        token.setToken(jwt);
        token.setUser(user);
        tokenRepository.save(token);
    }
}
