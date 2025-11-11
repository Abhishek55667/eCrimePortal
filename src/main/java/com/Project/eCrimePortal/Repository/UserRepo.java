package com.Project.eCrimePortal.Repository;

import com.Project.eCrimePortal.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
