package com.agh.kruglej.repositories;

import com.agh.kruglej.models.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentsRepository extends CrudRepository<Student, Long> {

}