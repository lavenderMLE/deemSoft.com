package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private String description;
    private String posterImgPath;
    private String author;
    @Column(nullable = false)
    private boolean favorite;

    public String getTitle()
    {
        return this.title;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public boolean getFavorite() {
        return this.favorite;
    }
    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }
    public String getAuthor()
    {
        return this.author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getDescription()
    {
        return this.description;
    }
    public  void setDescription(String description)
    {
        this.description = description;
    }
    public String getPosterImgPath()
    {
        return this.posterImgPath;
    }
    public void SetPosterImgPath(String posterImgPath)
    {
        this.posterImgPath = posterImgPath;
    }
    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", author='" +  author + '\'' +
                ", posterImgPath='" + posterImgPath + '\'' +
                ", favorite=" + favorite + '\'' +
                '}';
    }
}
