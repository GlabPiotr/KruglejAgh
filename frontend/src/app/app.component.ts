import {StudentsService} from "./services/students.service";
import {Component} from "@angular/core";
import {Student} from "./models/students";
import {MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";

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
  students: Array<any> = [new Student("a", "b", 1), new Student("c", "d", 2)];

  columnsNames = ['Select', 'Name', 'Last Name', 'Identity Number'];

  dataSource = new MatTableDataSource<Element>(this.students);
  selection = new SelectionModel<any>(false, []);

  isActionsButtonDisabled = true;

  selectedStudent: Student = null;

  constructor() {
  }

  _onItemClicked(event, selection, data): void {
    event.stopPropagation();
    this.selectedStudent = data;
    this._enableActionButtons();
  };


  _enableActionButtons(): void {
    this.isActionsButtonDisabled = false;
  }

  private _onCreateButtonClick(): void {
    this.studentsService.createStudent(new Student(this.name, this.lastName, this.identityNumber)).subscribe(() => {
    });
  }

  private _onGetStudentByIdButtonClick(): void {
    this.studentsService.getStudentById(this.id).subscribe(elem => this.students = [new Student("y", "w", 7)]);
  }

  private _onDeleteButtonClick(): void {
    this.studentsService.deleteStudent(this.selectedStudent.id).subscribe(() => {
    });
  }


  private _onGetStudents(): void {
    this.students = [new Student("a", "b", 1), new Student("c", "d", 2)];
    this.studentsService.getStudents().subscribe(elem => this.students = [new Student("a", "b", 1), new Student("c", "d", 2)]);
  }

}
