package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String author;
    private Integer cost;

    public String getName()
    {
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getAuthor()
    {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getCost()
    {
        return this.cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }
}
