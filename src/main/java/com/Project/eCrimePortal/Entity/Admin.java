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
public class Admin {

    @Id
    private int id;
    @NonNull
    private String username;
    @NonNull
    private String name;
    @NonNull
    private String password;
    @NonNull
    private String mobile;
    @NonNull
    private String email;
    @NonNull
    private LocalDate dob;
    @NonNull
    private String address;
    private String role;
}
