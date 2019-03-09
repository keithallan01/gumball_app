package com.example.GumballApp.controllers;


import com.example.GumballApp.repositories.CustomerRepository;
import com.example.GumballApp.repositories.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/Customers")

public class CustomerController {
    @Autowired
    ListingRepository listingRepository;
    @Autowired
    CustomerRepository customerRepository;



}
