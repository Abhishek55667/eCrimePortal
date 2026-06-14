package com.Backend.Repository;

import com.Backend.Entity.ContactMessage;
import com.Backend.Entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepo extends JpaRepository<Location,String> {
    Location findByUsername(String username);
    void deleteByUsername(String username);
}
