package com.itsupport.itsupport_backend.model.Dto;

import com.itsupport.itsupport_backend.model.Enum.Role;
import lombok.Data;

@Data
public class PersonneDTO {

    private Long id;
    private String username;
    private String email;
    private String password;
    private Role role;


}
