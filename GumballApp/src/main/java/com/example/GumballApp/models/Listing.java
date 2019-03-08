package com.example.GumballApp.models;

import javax.persistence.*;

@Entity
@Table(name = "listings")
public class Listing {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "item")
    private String item;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    private String category;
    @Column(name = "asking_price")
    private double askingPrice;

    // TODO: JSON IGNOREPROPERTIES
    // RELATIONSHIP
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
   private Customer customer;

    public Listing(String item, String description,
                   String category, double askingPrice, Customer customer) {
        this.item = item;
        this.description = description;
        this.category = category;
        this.askingPrice = askingPrice;
        this.customer = customer;
    }

    public Listing(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getAskingPrice() {
        return askingPrice;
    }

    public void setAskingPrice(double askingPrice) {
        this.askingPrice = askingPrice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}
