package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class StudentController {
    @Autowired
    StudentRepository studentRepository;

    //check the api's working correctly api
    @RequestMapping(value="/ping", method= RequestMethod.GET)
    @ResponseBody
    public String healthCheck() {
        return "This is working well";
    }


    @RequestMapping(value="/students", method=RequestMethod.GET)
    @ResponseBody
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }

    @RequestMapping(value="/student", method=RequestMethod.POST)
    @ResponseBody
    public Student addStudent(Student student) {

        String password = student.getPassword();
        return studentRepository.save(student);
    }

    @RequestMapping(value="/findstudent", method = RequestMethod.GET)
    @ResponseBody
    public Student findStudent(@RequestParam("studentId") int studentId)
    {
        return studentRepository.findById(studentId);
    }

    @RequestMapping(value= "/updatestudent", method = RequestMethod.GET)
    @ResponseBody
    public Student updateStudent(@RequestBody Student student)
    {
        return studentRepository.save(student);
    }

    @RequestMapping(value="/deletestudent", method = RequestMethod.GET)
    @ResponseBody
    public int deleteStudent(@RequestParam("studentId") int studentId)
    {
        return studentRepository.deleteById(studentId);
    }
}
