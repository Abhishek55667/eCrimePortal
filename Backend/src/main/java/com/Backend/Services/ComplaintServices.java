package com.Backend.Services;

import com.Backend.Entity.Complaints;
import com.Backend.Repository.ComplaintRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintServices {

    @Autowired
    private ComplaintRepo complaintRepo;


    public List<Complaints> getAllComplaints(){
        return complaintRepo.findAll();
    }
}
