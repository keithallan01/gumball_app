package com.example.GumballApp.repositories;

import com.example.GumballApp.models.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepository extends JpaRepository<Listing, Long>, ListingRepositoryCustom {
}
