package com.Project.eCrimePortal.Controller;

import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController()
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;


    @GetMapping("/get-details")
    public ResponseEntity<User> getUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        User user=userServices.getByUsername(authentication.getName());
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/update-details")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();;
        User old=userServices.getByUsername(username);
        if (user!=null){
            if (user!=old) {
                user.setId(old.getId());
                userServices.saveUser(user);
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-profile")
    public ResponseEntity<User> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User user=userServices.getByUsername(username);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userServices.deleteByUsername(username);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
