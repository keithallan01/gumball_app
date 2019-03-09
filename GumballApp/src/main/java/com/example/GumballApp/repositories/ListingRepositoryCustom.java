package com.example.GumballApp.repositories;

import com.example.GumballApp.models.Listing;

import java.util.List;

public interface ListingRepositoryCustom {
    List<Listing> getAllListingsFromTown(String town);
}
