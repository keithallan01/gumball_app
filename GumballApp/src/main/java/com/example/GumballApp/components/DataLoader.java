package com.example.GumballApp.components;

import com.example.GumballApp.models.Customer;
import com.example.GumballApp.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;
@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    CustomerRepository customerRepository;

public DataLoader(){

}

public void run(ApplicationArguments args) {
    Customer customer1 = new Customer("Kevin", "Allan",
            "1 Main Street", "Edinburgh",
            "0131-555-5656", "keithAllan@yahoo.com");
    customerRepository.save(customer1);


    Customer customer2 = new Customer("Gerry", "Waterston",
            "19 Happy Street, Porty", "Edinburgh",
            "0131-654-3493", "gwaterston@yahoo.com");
    customerRepository.save(customer2);

    Customer customer3 = new Customer("Mark", "Mackay",
            "26 Kirklands", "Innerleithen",
            "01896831723", "mark@yahoo.com");
    customerRepository.save(customer3);




}

}
