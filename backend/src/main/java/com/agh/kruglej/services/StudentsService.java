package com.agh.kruglej.services;

import com.agh.kruglej.exception.StudentException;
import com.agh.kruglej.models.Student;
import com.agh.kruglej.repositories.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by Piotr on 27.05.2018.
 */
@Service
public class StudentsService {

    private static final String USER_NOT_FOUND = "User with id:%s not found";

    @Autowired
    private StudentsRepository studentsRepository;

    public List<Student> getStudents() {
        return StreamSupport.stream(studentsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Student getStudent(String id) {
        return studentsRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new StudentException(String.format(USER_NOT_FOUND, id)));
    }

    public void removeStudent(String id) {
        studentsRepository.deleteById(Long.parseLong(id));
    }

    public void createStudent(Student student) {
        studentsRepository.save(student);
    }

    public void modifyStudent(Student student) {
        studentsRepository.save(student);
    }
}
