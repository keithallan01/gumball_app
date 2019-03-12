package com.example.GumballApp.repositories.ListingRepository;

import com.example.GumballApp.models.Listing;

import java.util.List;

public interface ListingRepositoryCustom {

    List<Listing> findListingsByTown(String town);
    List<Listing> findAllListingsOrderBySearchCounterDesc();

}
