package com.Project.eCrimePortal.Controller;


import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private UserServices userServices;

    @PostMapping("/save")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        userServices.updateCount();
        List<User> userList=userServices.getAll();
        for (User entity : userList){
            if (entity.getUsername().equals(user.getUsername())){
                return new ResponseEntity<>("username already exists", HttpStatus.OK);
            }
            if (entity.getMobile().equals(user.getMobile())){
                return new ResponseEntity<>("mobile no. already exists",HttpStatus.OK);
            }
        }
        if (user!=null) {
            userServices.saveNewUser(user);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
