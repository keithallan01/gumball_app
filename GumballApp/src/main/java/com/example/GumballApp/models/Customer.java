package com.example.GumballApp.models;

import javax.persistence.*;

@Entity
@Table(name="customers")

public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="address")
    private String address;

    @Column(name="town")
    private String town;

    @Column(name="telephone_number")
    private String telephoneNumber;

    @Column(name="email_address")
    private String emailAddress;

    // TODO: JSON IGNOREPROPERTIES
    // RELATIONSHIP
    // private List<Listing>;

    public Customer(String firstName, String lastName,
                    String address, String town, String telephoneNumber,
                    String emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.town = town;
        this.telephoneNumber = telephoneNumber;
        this.emailAddress = emailAddress;
    }

    public Customer(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}


