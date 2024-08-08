package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.ITechnicienApi;
import com.itsupport.itsupport_backend.model.Dto.TechnicienDTO;
import com.itsupport.itsupport_backend.model.Entity.Technicien;
import com.itsupport.itsupport_backend.model.Mapper.TechnicienMapper;
import com.itsupport.itsupport_backend.service.Interface.IAuthenticationService;
import com.itsupport.itsupport_backend.service.Interface.ITechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class TechnicienController implements ITechnicienApi {

    @Autowired
    private ITechnicienService technicienService;

    @Autowired
    private IAuthenticationService authenticationService;

    @Autowired
    private TechnicienMapper Mapper;

    @Override
    public TechnicienDTO createTechnicien(TechnicienDTO technicienDTO) {
        Technicien technicien = Mapper.toEntity(technicienDTO);
        authenticationService.registerTechnicien(technicien);
        return Mapper.toDTO(technicien);
    }

    @Override
    public void deleteTechnicien(Long id) {
        technicienService.delete(id);
    }

    @Override
    public List<TechnicienDTO> getAllTechniciens() {
        return technicienService.getAll();
    }

    @Override
    public TechnicienDTO getTechnicienById(Long id) {
        return technicienService.getById(id);
    }

    @Override
    public TechnicienDTO updateTechnicien(Long id, TechnicienDTO technicienDTO) {
        return technicienService.update(id, technicienDTO);
    }
}
