package com.example.GumballApp.repositories.ListingRepository;

import com.example.GumballApp.models.Listing;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Long>, ListingRepositoryCustom {

    List<Listing> findListingsByTown(String town);
    List<Listing> findListingsByCategory(String category);
    List<Listing> findListingsByCustomerId(Long customerId);

    //  ADDITIONAL
    List<Listing> findListingsByCustomerIdOrderByItemAsc(Long customerId); // works
    List<Listing> findListingsByItemOrderByAskingPriceAsc(String Item); // works
    List<Listing> findListingsByItemOrderByAskingPriceDesc(String Item); // works

    List<Listing> findByItemOrderBySearchCounterDesc(String item); // works

    List<Listing> findAllListingsOrderBySearchCounterDesc(); // working on

}

// things to try:
//    List<Listing> findAllByItemOrderBySearchCounterDesc(String item);
//    List<Listing> findTop10BySearchCounter(Long searchCounter);
//    List<Listing> findAll(Specification<Listing> spec);