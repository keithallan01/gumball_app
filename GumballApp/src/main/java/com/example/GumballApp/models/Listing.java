package com.example.GumballApp.models;

public class Listing {

    private String item;

    private String description;

    private String category;

    private double askingPrice;

    // TODO: JSON IGNOREPROPERTIES
    // RELATIONSHIP
   private Customer customer;

    public Listing(String item, String description,
                   String category, double askingPrice, Customer customer) {
        this.item = item;
        this.description = description;
        this.category = category;
        this.askingPrice = askingPrice;
        this.customer = customer;
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
