package com.Project.eCrimePortal.Services;


import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    @Autowired
    private UserRepo userRepo;

    public void saveUser(User user){
        userRepo.save(user);
    }
}
