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

  columnsNames = ['Select', 'Name', 'Last Name', 'Identity Number'];

  dataSource = new MatTableDataSource<Student>([]);
  selection = new SelectionModel<any>(false, []);

  isActionsButtonDisabled = true;

  selectedStudent: Student = null;

  constructor(private studentsService: StudentsService) {
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
    this.studentsService.getStudentById(this.id).subscribe(student => this.dataSource.data = [student]);
  }

  private _onDeleteButtonClick(): void {
    this.studentsService.deleteStudent(this.selectedStudent.identityNumber).subscribe(() => {

      let index = this.dataSource.data.findIndex(student => student.identityNumber === this.selectedStudent.identityNumber); //find index in your array
      this.dataSource.data.splice(index, 1);//remove element from array
    });
  }

  private _onGetStudents(): void {
    this.studentsService.getStudents().subscribe(students => this.dataSource.data = students);
  }

}
