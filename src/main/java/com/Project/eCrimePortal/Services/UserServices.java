package com.Project.eCrimePortal.Services;


import com.Project.eCrimePortal.Entity.Role;
import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UserRepo userRepo;

    private static final PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
    private static int adminCount=1000;
    private static int policeCount=10000;
    private static int userCount=100000;

    public void updateCount(){
        for (User i : getAll()){
            if (i.getRole()==Role.POLICE) {
                policeCount = i.getId() + 1;
            }
            if (i.getRole()==Role.USER) {
                userCount = i.getId() + 1;
            }
            if (i.getRole()==Role.ADMIN){
                adminCount=i.getId()+1;
            }

        }
    }

    //Admin services methods
    public void saveNewAdmin(User admin){
        admin.setId(adminCount);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
        adminCount++;
    }

    public void saveAdmin(User admin){
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
    }

    //Police services methods
    public void saveNewPolice(User police){
        police.setId(policeCount);
        police.setPassword(passwordEncoder.encode(police.getPassword()));
        police.setRole(Role.POLICE);
        userRepo.save(police);
        policeCount++;
    }

    public void savePolice(User police){
        police.setRole(Role.USER);
        userRepo.save(police);
    }

    public void saveNewUser(User user){
        user.setId(userCount);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepo.save(user);
        userCount++;
    }

    //User service methods
    public void saveUser(User user){
        user.setRole(Role.USER);
        userRepo.save(user);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }


    //general used methods
    public User getByUsername(String username){
        return userRepo.findByUsername(username);
    }

    @Transactional
    public void deleteByUsername(String username){
        userRepo.deleteByUsername(username);
    }

    public void changePassword(User user, String password) {
        user.setPassword(passwordEncoder.encode(password));
        userRepo.save(user);
    }
}
