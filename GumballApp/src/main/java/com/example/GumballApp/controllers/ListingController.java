package com.example.GumballApp.controllers;


import com.example.GumballApp.models.Listing;
import com.example.GumballApp.repositories.CustomerRepository.CustomerRepository;
import com.example.GumballApp.repositories.ListingRepository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
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

    // ADDITIONAL
    @GetMapping(value = "/item-alpha-order/{customerId}")
    public List<Listing> findListingsByCustomerIdOrderByItemAsc(@PathVariable Long customerId) {
        return listingRepository.findListingsByCustomerIdOrderByItemAsc(customerId);
    }

    @GetMapping(value = "/item-low-high/{item}")
    public List<Listing> findListingsByItemOrderByAskingPriceAsc(@PathVariable  String item){
        return listingRepository.findListingsByItemOrderByAskingPriceAsc(item);
    }

    @GetMapping(value = "/item-high-low/{item}")
    public List<Listing> findListingsByItemOrderByAskingPriceDesc(@PathVariable  String item){
        return listingRepository.findListingsByItemOrderByAskingPriceDesc(item);
    }

    @GetMapping(value = "/item-count-order/{item}")
    public List<Listing> findByItemOrderBySearchCounterDesc (@PathVariable String item){
        return listingRepository.findByItemOrderBySearchCounterDesc(item);
    }

    @GetMapping(value = "/hot")
    public List<Listing> findAllListingsOrderBySearchCounterDesc (){
        return listingRepository.findByItemOrderBySearchCounterDesc();
    }


}

//    @GetMapping(value = "/{spec}")
//    public List<Listing> findAll(@PathVariable Specification<Listing> spec){
//        return listingRepository.findAll(spec);
//    }

//    @GetMapping(value = "/hot")
//    public List<Listing> getAllListingsOrderBySearchCounter(){
//       return listingRepository.getAllListingsOrderBySearchCounter();
//        return listingRepository.findAll(new Sort(Sort.Direction.DESC, "search_counter"));
//    }




