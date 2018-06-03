package com.agh.kruglej.models;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Piotr on 27.05.2018.
 */
@Entity
public class Student {

    private String name;
    private String lastName;

    @Id
    private Long identityNumber;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getIdentityNumber() {
        return identityNumber;
    }

    public void setIdentityNumber(Long identityNumber) {
        this.identityNumber = identityNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
