package com.example.GumballApp;

import com.example.GumballApp.models.Customer;
import com.example.GumballApp.models.Listing;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ListingTest {

    private Listing listing1, listing2, listing3;
    private Customer customer1, customer2, customer3;


    @Before
    public void before(){
        customer1 = new Customer("Kevin", "Allan",
                "1 Main Street", "Edinburgh",
                "0131-555-5656", "keithAllan@yahoo.com");

        listing1 = new Listing("bike", "boneshaker",
                "Sports & Leisure", 35.00, customer1);


        listing2 = new Listing("cooker", "aga",
                                   "Kitchenware", 100.00, customer1);
    }

    @Test
    public void listingHasItem(){
        assertEquals("bike", listing1.getItem());
    }

    @Test
    public void listingHasAskingPrice(){
        assertEquals(100.00, listing2.getAskingPrice(),0.00);
    }

}
