package com.example.demo.repository;

import com.example.demo.model.Book;
import com.example.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findAll();
    Book findById(int id);
    int deleteById(int id);
}
