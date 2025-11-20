package com.Project.eCrimePortal.Services;

import com.Project.eCrimePortal.Entity.Admin;
import com.Project.eCrimePortal.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServices {

    @Autowired
    private AdminRepo adminRepo;

    private static final PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
    private static int count=1;

    public void updateCount(){
        List<Admin> admins=getAll();
        for (Admin admin:admins){
            count=admin.getId()+1;
        }
    }

    public void saveNew(Admin admin){
        admin.setId(count);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole("ADMIN");
        adminRepo.save(admin);
        count++;
    }

    public void saveAdmin(Admin admin){
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole("ADMIN");
        adminRepo.save(admin);
    }

    public Admin getByUsername(String username){
        return adminRepo.findByUsername(username);
    }

    public List<Admin> getAll(){
        return  adminRepo.findAll();
    }

    public Admin deleteByUsername(String username){
        return adminRepo.deleteByUsername(username);
    }

    public void deleteAll(String passkey){
        adminRepo.deleteAll();
    }
}