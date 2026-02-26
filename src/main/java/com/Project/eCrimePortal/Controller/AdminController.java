package com.Project.eCrimePortal.Controller;


import com.Project.eCrimePortal.Config.Passkey;
import com.Project.eCrimePortal.Entity.Admin;
import com.Project.eCrimePortal.Entity.Police;
import com.Project.eCrimePortal.Entity.User;
import com.Project.eCrimePortal.Services.AdminServices;
import com.Project.eCrimePortal.Services.PoliceServices;
import com.Project.eCrimePortal.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminServices adminServices;
    @Autowired
    private UserServices userServices;
    @Autowired
    private PoliceServices policeServices;

    @PostMapping("/create-admin")
    public ResponseEntity<String> saveAdmin(@RequestBody Admin admin){
        adminServices.updateCount();
        List<Admin> admins=adminServices.getAll();
        for (Admin entity: admins){
            if (entity.getUsername().equals(admin.getUsername())){
                return new ResponseEntity<>("username already exists", HttpStatus.OK);
            }
            if (entity.getMobile().equals(admin.getMobile())){
                return new ResponseEntity<>("mobile no. already exists",HttpStatus.OK);
            }
            if (entity.getEmail().equals(admin.getEmail())){
                return new ResponseEntity<>("email already exists",HttpStatus.OK);
            }
        }
        if (admin!=null) {
            adminServices.saveNew(admin);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/create-new-police")
    public ResponseEntity<String> saveUser(@RequestBody Police police){
        policeServices.updateCount();
        List<Police> policeList=policeServices.getAll();
        for (Police entity : policeList){
            if (entity.getUsername().equals(police.getUsername())){
                return new ResponseEntity<>("username already exists", HttpStatus.OK);
            }
            if (entity.getMobile().equals(police.getMobile())){
                return new ResponseEntity<>("mobile no. already exists",HttpStatus.OK);
            }
            if (entity.getEmail().equals(police.getEmail())){
                return new ResponseEntity<>("email already exists",HttpStatus.OK);
            }
        }
        if (police!=null) {
            policeServices.saveNewUser(police);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get-admin-details")
    public ResponseEntity<Admin> getAdmin(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        Admin admin=adminServices.getByUsername(authentication.getName());
        if (admin!=null) {
            return new ResponseEntity<>(admin,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-all-admins")
    public ResponseEntity<List<Admin>> getAll(){
        List<Admin> adminList=adminServices.getAll();
        if (adminList!=null) {
            return new ResponseEntity<>(adminList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-user-details")
    public ResponseEntity<User> getUser(@RequestBody String username){
        User user=userServices.getByUsername(username);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @GetMapping("/get-all-users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> userList=userServices.getAll();
        if (userList!=null) {
            return new ResponseEntity<>(userList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-police-details")
    public ResponseEntity<Police> getUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        Police police=policeServices.getByUsername(authentication.getName());
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

    @GetMapping("/get-all-police")
    public ResponseEntity<List<Police>> getAllPolice(){
        List<Police> policeList=policeServices.getAll();
        if (policeList!=null) {
            return new ResponseEntity<>(policeList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update-admin-details")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        Admin old=adminServices.getByUsername(username);
        if (admin!=null){
            if (admin!=old) {
                admin.setId(old.getId());
                old.setUsername((admin.getUsername()!=null && admin.getUsername() != old.getUsername())? admin.getName() : old.getUsername());
                old.setName((admin.getName()!=null && admin.getName() != old.getName())? admin.getName() : old.getName());
                old.setDob((admin.getDob()!=null && admin.getDob() != old.getDob())? admin.getDob() : old.getDob());
                old.setAddress((admin.getAddress()!=null && admin.getAddress() != old.getAddress())? admin.getAddress() : old.getAddress());
                adminServices.saveAdmin(old);
                return new ResponseEntity<>(admin, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/password-change")
    public ResponseEntity<String> changePassword(@RequestBody String password){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        Admin admin=adminServices.getByUsername(username);
        if (password!=null){
            adminServices.changePassword(admin,password);
            return new ResponseEntity<>("Password successfully changed",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("delete-admin")
    public ResponseEntity<String> deleteAdmin(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        Admin admin=adminServices.getByUsername(username);
        if (admin!=null){
            adminServices.deleteByUsername(username);
            return new ResponseEntity<>("Admin deleted",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete-all-data")
    public ResponseEntity<String> wipeAllData(@RequestBody String passkey){
        Passkey key=new Passkey();
        if (passkey.equals(key.getPasskey())){
            adminServices.getAll();
            return new ResponseEntity<>("All Admins Data Has Been Wiped",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-user-profile")
    public ResponseEntity<String> deleteUser(@RequestBody String username){
        User user=userServices.getByUsername(username);
        if (user!=null){
            userServices.deleteByUsername(username);
            return new ResponseEntity<>("User deleted",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete-police-profile")
    public ResponseEntity<Police> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        Police police=policeServices.getByUsername(username);
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        policeServices.deleteByUsername(username);
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

}
