package com.Project.eCrimePortal.Controller;

import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @PostMapping
    public String saveUser(@RequestBody User user){
        userServices.saveUser(user);
        return "saved";
    }

    @GetMapping
    public String a(){
        return "ok";
    }
}
