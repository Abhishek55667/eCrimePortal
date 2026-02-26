package com.Project.eCrimePortal.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Police {

    @Id
    private int id;
    private String username;
    private String name;
    private String password;
    private String mobile;
    private String email;
    private LocalDate dob;
    private String address;
    private String role;
}
