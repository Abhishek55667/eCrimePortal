package com.Project.eCrimePortal.Repository;

import com.Project.eCrimePortal.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    Admin findByUsername(String username);
    Admin deleteByUsername(String username);
}
