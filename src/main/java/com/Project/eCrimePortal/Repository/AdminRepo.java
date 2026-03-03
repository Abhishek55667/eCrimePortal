package com.Project.eCrimePortal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    Admin findByUsername(String username);
    void deleteByUsername(String username);
}
