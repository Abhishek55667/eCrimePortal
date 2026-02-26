package com.Project.eCrimePortal.Services;


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
    private static int count=100000;

    public void updateCount(){
        for (User i : getAll()){
            count= i.getId()+1;

        }
    }

    public void saveNewUser(User user){
        user.setId(count);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        userRepo.save(user);
        count++;
    }

    public void saveUser(User user){
        user.setRole("USER");
        userRepo.save(user);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }

    public User getUser(int id){
        return userRepo.findById(id).orElse(null);
    }

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
