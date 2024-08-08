package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.IPanneApi;
import com.itsupport.itsupport_backend.model.Dto.PanneDTO;
import com.itsupport.itsupport_backend.model.Entity.Panne;
import com.itsupport.itsupport_backend.model.Mapper.PanneMapper;
import com.itsupport.itsupport_backend.service.Interface.IAuthenticationService;
import com.itsupport.itsupport_backend.service.Interface.IPanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PanneController implements IPanneApi {

    @Autowired
    private IPanneService panneService;

    @Autowired
    private PanneMapper Mapper;

    @Override
    public PanneDTO create(PanneDTO DTO) {
        return panneService.create(DTO);
    }

    @Override
    public void delete(Long id) {
        panneService.delete(id);
    }

    @Override
    public List<PanneDTO> getAll() {
        return panneService.getAll();
    }

    @Override
    public PanneDTO getById(Long id) {
        return panneService.getById(id);
    }

    @Override
    public PanneDTO update(Long id, PanneDTO DTO) {
        return panneService.update(id, DTO);
    }
}
