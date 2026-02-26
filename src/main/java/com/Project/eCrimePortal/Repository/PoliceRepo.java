package com.Project.eCrimePortal.Repository;

import com.Project.eCrimePortal.Entity.Police;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoliceRepo extends JpaRepository<Police,Integer> {
    Police findByUsername(String Username);
    void deleteByUsername(String Username);
}
