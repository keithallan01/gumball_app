package com.example.GumballApp.repositories.CustomerRepository;
import com.example.GumballApp.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

}
