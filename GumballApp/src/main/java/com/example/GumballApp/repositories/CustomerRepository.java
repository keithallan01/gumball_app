package com.example.GumballApp.repositories;
import com.example.GumballApp.models.Customer;
import com.example.GumballApp.models.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

}
