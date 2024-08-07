package com.itsupport.itsupport_backend.model.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationResponse {
    @JsonProperty("jwt")
    private String jwt;
    @JsonProperty("message")
    private String message;
}
