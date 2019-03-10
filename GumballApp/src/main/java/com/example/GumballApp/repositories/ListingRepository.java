package com.example.GumballApp.repositories;

import com.example.GumballApp.models.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Long>, ListingRepositoryCustom {
    List<Listing> getAllListingsFromTown(String town);
    List<Listing> getListingsByCustomerId(Long customerId);
}
