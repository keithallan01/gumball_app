package com.example.GumballApp;

import com.example.GumballApp.models.Customer;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest

public class CustomerTest {

    private Customer customer1, customer2, customer3;
    @Before
    public void before() {
        customer1 = new Customer("Kevin", "Allan",
                "1 Main Street", "Edinburgh",
                "0131-555-5656", "keithAllan@yahoo.com");
        customer2 = new Customer("Gerry", "Waterston",
                "19 Happy Street, Porty", "Edinburgh",
                "0131-654-3493", "gwaterston@yahoo.com");
        customer3 = new Customer("Mark", "Mackay",
                "26 Kirklands", "Innerleithen",
                "01896831723", "mark@yahoo.com");
    }

    @Test
    public void testCustomerHasName(){
        assertEquals("Kevin",customer1.getFirstName());
    }

    @Test
    public void testCustomerHasEmail(){
        assertEquals("Kevin",customer1.getEmailAddress());
    }
}
