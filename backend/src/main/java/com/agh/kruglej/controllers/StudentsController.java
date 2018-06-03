package com.agh.kruglej.controllers;

import com.agh.kruglej.models.Student;
import com.agh.kruglej.services.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.agh.kruglej.mappings.Mappings.*;

/**
 * Created by Piotr on 27.05.2018.
 */
@RestController
public class StudentsController {

    @Autowired
    private StudentsService studentsService;

    @GetMapping(GET_STUDENTS)
    public List<Student> getStudents() {
        return studentsService.getStudents();
    }

    @GetMapping(GET_STUDENT)
    public Student getStudent(@PathVariable(ID) String id) {
        return studentsService.getStudent(id);
    }

    @DeleteMapping(REMOVE_STUDENT)
    public void removeStudent(@PathVariable(ID) String id) {
        studentsService.removeStudent(id);
    }

    @PostMapping(CREATE_STUDENT)
    public void createStudent(@RequestBody Student student) {
        studentsService.createStudent(student);
    }

    @PutMapping(MODIFY_STUDENT)
    public void modifyStudent(@PathVariable(ID) String id, @RequestBody Student student) {
        studentsService.modifyStudent(student);
    }
}
