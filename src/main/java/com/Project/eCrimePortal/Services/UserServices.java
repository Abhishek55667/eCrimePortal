package com.Project.eCrimePortal.Services;


import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UserRepo userRepo;

    public void saveUser(User user){
        userRepo.save(user);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }

    public User getUser(int id){
        return userRepo.findById(id).orElse(null);
    }

    public void deleteUser(int id){
        userRepo.deleteById(id);
    }

    public void deleteAll(){
        userRepo.deleteAll();
    }

}
