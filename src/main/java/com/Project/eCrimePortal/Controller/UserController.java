package com.Project.eCrimePortal.Controller;

import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @PostMapping
    public ResponseEntity<String> saveUser(@RequestBody User user){
        if (user!=null) {
            userServices.saveNewUser(user);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<User> getUser(@PathVariable int id){
        User user=userServices.getUser(id);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id,@RequestBody User user){
        User old=userServices.getUser(id);
        if (user!=null){
            if (user!=old) {
                user.setId(id);
                userServices.saveUser(user);
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable int id){
        User user=userServices.getUser(id);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userServices.deleteUser(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
