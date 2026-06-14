package com.Backend.Services;

import com.Backend.Entity.Location;
import com.Backend.Repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationServices {

    @Autowired
    private LocationRepo locationRepo;

    public void save(Location location){
        if(location!=null) {
            locationRepo.save(location);
        }
    }

    public Location getLocation(String username){
        return locationRepo.findByUsername(username);
    }
}
