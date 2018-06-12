import {Injectable} from "@angular/core";
import {Student} from "../models/students";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class StudentsService {

  url = '/students';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(this.url + '/' + id);
  }

  createStudent(data: Student): Observable<any> {
    return this.http.post<Student>(this.url, data, httpOptions);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, httpOptions);
  }
}
