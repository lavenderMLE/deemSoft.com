import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
      this.getStudents();
  }
  public getStudents() : void {

    this.studentService.getStudents().subscribe((response : Student[]) => { this.students = response; }, (error : HttpErrorResponse) => { alert(error.message); });
  }

  public onOpenModal(student: Student, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if(mode === 'add') {
        button.setAttribute('data-target', '#addStudentModal');
      }
      if(mode === 'edit') {
        button.setAttribute('data-target', '#editStudentModal');
      }
      if(mode === 'delete') {
        button.setAttribute('data-target', '#deleteStudentModal');
      }
      if(mode === 'update') {
        button.setAttribute('data-target', '#updateStudentModal');
      }

      container?.appendChild(button);
      button.click();
  }
}
