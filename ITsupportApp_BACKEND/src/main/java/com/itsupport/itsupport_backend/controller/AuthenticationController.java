package com.itsupport.itsupport_backend.controller;


import com.itsupport.itsupport_backend.model.Dto.PersonneDTO;
import com.itsupport.itsupport_backend.model.Entity.AuthenticationResponse;
import com.itsupport.itsupport_backend.model.Mapper.PersonneMapper;
import com.itsupport.itsupport_backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final PersonneMapper Mapper;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody PersonneDTO request) {

        return ResponseEntity.ok(authenticationService.authenticate(Mapper.toEntity(request)));
    }




}





