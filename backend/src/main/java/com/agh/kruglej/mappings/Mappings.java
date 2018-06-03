package com.agh.kruglej.mappings;

/**
 * Created by Piotr on 27.05.2018.
 */
public interface Mappings {

    String ID = "id";
    String PATH_ID = "/{" + ID + "}";

    String STUDENTS = "/students";
    String GET_STUDENTS = STUDENTS;
    String GET_STUDENT = STUDENTS + PATH_ID;

    String CREATE_STUDENT = STUDENTS;
    String MODIFY_STUDENT = STUDENTS + PATH_ID;

    String REMOVE_STUDENT = STUDENTS + PATH_ID;
}
