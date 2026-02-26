package com.Project.eCrimePortal.Controller;

import com.Project.eCrimePortal.Entity.Police;
import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.PoliceServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/police")
public class PoliceController {

    @Autowired
    private PoliceServices policeServices;


    @GetMapping("/get-details")
    public ResponseEntity<Police> getUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        Police police=policeServices.getByUsername(authentication.getName());
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

    @PutMapping("/update-police-details")
    public ResponseEntity<String> updateUser(@RequestBody Police police){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        Police old=policeServices.getByUsername(username);
        if (police!=null){
            if (police!=old) {
                police.setId(old.getId());
                old.setUsername((police.getUsername()!=null && police.getUsername() != old.getUsername())? police.getName() : old.getUsername());
                old.setName((police.getName()!=null && police.getName() != old.getName())? police.getName() : old.getName());
                old.setDob((police.getDob()!=null && police.getDob() != old.getDob())? police.getDob() : old.getDob());
                old.setAddress((police.getAddress()!=null && police.getAddress() != old.getAddress())? police.getAddress() : old.getAddress());
                policeServices.saveUser(old);
                return new ResponseEntity<>("Successfully updated", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/password-change")
    public ResponseEntity<String> changePassword(@RequestBody String password){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        Police police=policeServices.getByUsername(username);
        if (password!=null){
            policeServices.changePassword(police,password);
            return new ResponseEntity<>("Password successfully changed",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-police-profile")
    public ResponseEntity<Police> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        Police police=policeServices.getByUsername(username);
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        policeServices.deleteByUsername(username);
        return new ResponseEntity<>(police,HttpStatus.OK);
    }
}
