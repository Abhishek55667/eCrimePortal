package com.Project.eCrimePortal.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private int id;
    private String name;
    private String password;
    private String mobile;
    private String email;
    private LocalDate dob;
    private String address;
    private String role;
}
