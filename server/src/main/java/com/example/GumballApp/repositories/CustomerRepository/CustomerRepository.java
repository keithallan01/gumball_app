package com.example.GumballApp.repositories.CustomerRepository;
import com.example.GumballApp.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

}
