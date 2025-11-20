package com.Project.eCrimePortal.Services;

import com.Project.eCrimePortal.Entity.Admin;
import com.Project.eCrimePortal.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("adminDetailsServiceImpl")
public class AdminDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AdminRepo adminRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin =adminRepo.findByUsername(username);
        if (admin!=null){
            UserDetails adminDetails=org.springframework.security.core.userdetails.User.builder()
                    .username(admin.getUsername())
                    .password(admin.getPassword())
                    .roles(admin.getRole())
                    .build();
            return adminDetails;
        }
        throw new UsernameNotFoundException("admin not found with username : "+username);
    }
}

