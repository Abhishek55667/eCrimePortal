package com.Project.eCrimePortal.Services;

import com.Project.eCrimePortal.Entity.Police;
import com.Project.eCrimePortal.Repository.PoliceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PoliceDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private PoliceRepo policeRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Police police =policeRepo.findByUsername(username);
        if (police!=null){
            UserDetails policeDetails=org.springframework.security.core.userdetails.User.builder()
                    .username(police.getUsername())
                    .password(police.getPassword())
                    .roles(police.getRole())
                    .build();
            return policeDetails;
        }
        throw new UsernameNotFoundException("user not found with username : "+username);
    }
}

