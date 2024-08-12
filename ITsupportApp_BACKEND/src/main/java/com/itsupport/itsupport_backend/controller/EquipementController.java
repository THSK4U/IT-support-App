package com.itsupport.itsupport_backend.controller;

import com.itsupport.itsupport_backend.controller.api.IEquipementApi;
import com.itsupport.itsupport_backend.controller.api.IPanneApi;
import com.itsupport.itsupport_backend.model.Dto.EquipementDTO;
import com.itsupport.itsupport_backend.model.Dto.PanneDTO;
import com.itsupport.itsupport_backend.model.Mapper.EquipementMapper;
import com.itsupport.itsupport_backend.model.Mapper.PanneMapper;
import com.itsupport.itsupport_backend.service.Interface.IEquipementService;
import com.itsupport.itsupport_backend.service.Interface.IPanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EquipementController implements IEquipementApi {

    @Autowired
    private IEquipementService Service;

    @Autowired
    private EquipementMapper Mapper;

    @Override
    public EquipementDTO createequipement(EquipementDTO DTO) {
        System.out.print(DTO);
        return Service.create(DTO);
    }

    @Override
    public void deleteequipement(Long id) {
        Service.delete(id);
    }

    @Override
    public List<EquipementDTO> getAllequipement() {
        return Service.getAll();
    }

    @Override
    public EquipementDTO getByIdequipement(Long id) {
        return Service.getById(id);
    }

    @Override
    public EquipementDTO updateequipement(Long id, EquipementDTO DTO) {
        return Service.update(id, DTO);
    }
}
