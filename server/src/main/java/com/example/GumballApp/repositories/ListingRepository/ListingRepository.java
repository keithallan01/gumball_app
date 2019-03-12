package com.example.GumballApp.repositories.ListingRepository;

import com.example.GumballApp.models.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Long>, ListingRepositoryCustom {

    List<Listing> findListingsByTown(String town);
    List<Listing> findListingsByCategory(String category);
    List<Listing> findListingsByCustomerId(Long customerId);
    List<Listing> sortListingsOrderBySearchCounterDesc();

}
