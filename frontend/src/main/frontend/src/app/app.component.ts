import {StudentsService} from "./services/students.service";
import {Component} from "@angular/core";
import {Student} from "./models/students";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  lastName: string;
  identityNumber: number;

  id: number;

  constructor(private studentsService: StudentsService) {
  }

  private _onCreateButtonClick(): void {
    this.studentsService.createStudent(new Student(this.name, this.lastName, this.identityNumber)).subscribe(() => {
    });
  }

  private _onGetStudentByIdButtonClick(): void {
    this.studentsService.getStudentById(this.id).subscribe(elem => console.log(elem));
  }

  private _onDeleteButtonClick(): void {
    this.studentsService.deleteStudent(this.id).subscribe(() => {
    });
  }

  private _onModifyButtonClick(): void {
    this.studentsService.modifyStudent(new Student(this.name, this.lastName, this.identityNumber), this.id).subscribe(() => {
    });
  }

  private _onGetStudents(): void {
    this.studentsService.getStudents().subscribe(elem => console.log(elem));
  }

}
