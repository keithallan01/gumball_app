package com.example.GumballApp.controllers;


import com.example.GumballApp.repositories.CustomerRepository.CustomerRepository;
import com.example.GumballApp.repositories.ListingRepository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customers")

public class CustomerController {

    @Autowired
    ListingRepository listingRepository;

    @Autowired
    CustomerRepository customerRepository;

}
