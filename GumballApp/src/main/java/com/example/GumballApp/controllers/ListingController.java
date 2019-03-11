package com.example.GumballApp.controllers;


import com.example.GumballApp.models.Listing;
import com.example.GumballApp.repositories.CustomerRepository.CustomerRepository;
import com.example.GumballApp.repositories.ListingRepository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/Listings")
public class ListingController {

    @Autowired
    ListingRepository listingRepository;
    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/town/{town}")
    public List<Listing> getAllListingsFromTown(@PathVariable String town){
        return listingRepository.getAllListingsFromTown(town);
    }

    @GetMapping(value = "/customer/{customerId}")
    public List<Listing> getListingsByCustomerId(@PathVariable Long customerId) {
        return listingRepository.getListingsByCustomerId(customerId);
    }
}
