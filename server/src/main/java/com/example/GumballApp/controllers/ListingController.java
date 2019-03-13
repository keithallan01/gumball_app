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
    public List<Listing> findListingsByCustomerId(@PathVariable Long customerId) {
        return listingRepository.findListingsByCustomerId(customerId);
    }

    @GetMapping(value = "/category/{category}")
    public List<Listing> findListingsByCategory(@PathVariable String category){
        return listingRepository.findListingsByCategory(category);
    }

    @GetMapping(value = "/asking-price/{askingPrice}")
    public List<Listing> findListingsByAskingPrice(@PathVariable double askingPrice) {
        return listingRepository.findListingsByAskingPrice(askingPrice);
    }

    @GetMapping(value = "/top")
    public List<Listing> sortListingsOrderBySearchCounterDesc(){
        return listingRepository.sortListingsOrderBySearchCounterDesc();
    }

    @GetMapping(value = "/category/top/{category}")
    public List<Listing> findListingsByCategoryOrderBySearchCounterDesc(@PathVariable String category){
        return listingRepository.findListingsByCategoryOrderBySearchCounterDesc(category);
    }

    @GetMapping(value = "/item/top/{item}")
    public List<Listing> findListingsByItemOrderBySearchCounterDesc(@PathVariable String item){
        return listingRepository.findListingsByItemOrderBySearchCounterDesc(item);
    }

    //ADDITIONAL QUERIES - OPTIONAL
    @GetMapping(value = "/item/low-high/{item}")
    public List<Listing> findListingsByItemOrderByAskingPriceAsc(@PathVariable  String item){
        return listingRepository.findListingsByItemOrderByAskingPriceAsc(item);
    }

    @GetMapping(value = "/item/high-low/{item}")
    public List<Listing> findListingsByItemOrderByAskingPriceDesc(@PathVariable  String item){
        return listingRepository.findListingsByItemOrderByAskingPriceDesc(item);
    }

    @GetMapping(value = "/category/item/a-z/{category}")
    public List<Listing> findListingsByCategoryOrderByItemAsc(@PathVariable  String category){
        return listingRepository.findListingsByCategoryOrderByItemAsc(category);
    }

    @GetMapping(value = "/category/item/z-a/{item}")
    public List<Listing> findListingsByCategoryOrderByItemDesc(@PathVariable  String category){
        return listingRepository.findListingsByCategoryOrderByItemDesc(category);
    }



}
