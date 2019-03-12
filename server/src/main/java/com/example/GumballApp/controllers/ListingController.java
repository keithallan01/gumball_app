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
@RequestMapping(value = "/listings")
public class ListingController {

    @Autowired
    ListingRepository listingRepository;
    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/town/{town}")
    public List<Listing> findListingsByTown(@PathVariable String town){
        return listingRepository.findListingsByTown(town);
    }

    @GetMapping(value = "/customer/{customerId}")
    public List<Listing> findListingsByCustomerIdOrderByItemAsc(@PathVariable Long customerId) {
//        return listingRepository.findListingsByCustomerId(customerId);
        return listingRepository.findListingsByCustomerIdOrderByItemAsc(customerId);
    }

    @GetMapping(value = "/category/{category}")
    public List<Listing> findListingsByCategory(@PathVariable String category){
        return listingRepository.findListingsByCategory(category);
    }

}




