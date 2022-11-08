package com.example.demo.repository;

import com.example.demo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.util.List;

public interface BookRepository {

    @Autowired
    BookRepository bookRepository = null;

    //get all the books
    public List<Book> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books;
    }

    public Book getBookById(int id) {
        return bookRepository.getBookById(id);
    }
}
