package com.Project.eCrimePortal.Services;


import com.Project.eCrimePortal.Entity.Police;
import com.Project.eCrimePortal.Repository.PoliceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoliceServices {
    @Autowired
    private PoliceRepo policeRepo;

    private static final PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
    private static int count=10000;

    public void updateCount(){
        for (Police i : getAll()){
            count= i.getId()+1;

        }
    }

    public void saveNewUser(Police police){
        police.setId(count);
        police.setPassword(passwordEncoder.encode(police.getPassword()));
        police.setRole("POLICE");
        policeRepo.save(police);
        count++;
    }

    public void saveUser(Police police){
        police.setRole("POLICE");
        policeRepo.save(police);
    }

    public List<Police> getAll(){
        return policeRepo.findAll();
    }

    public Police getUser(int id){
        return policeRepo.findById(id).orElse(null);
    }

    public Police getByUsername(String username){
        return policeRepo.findByUsername(username);
    }

    public void deleteByUsername(String username){
        policeRepo.deleteByUsername(username);
    }

    public void changePassword(Police police, String password) {
        police.setPassword(passwordEncoder.encode(password));
        policeRepo.save(police);
    }
}
