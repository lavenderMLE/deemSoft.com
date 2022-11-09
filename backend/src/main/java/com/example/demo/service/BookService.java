package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.model.Student;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookService {

    @Autowired
    BookRepository bookRepository;

    //get all the students
    public List<Book> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books;
    }

    public Book getBookById(int id)
    {
        return bookRepository.findById(id);
    }

    //save book in database
    public void saveBook(Book book)
    {
        try {
            bookRepository.save(book);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //delete book by id
    public void deleteBook(int id)
    {
        try {
            bookRepository.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
