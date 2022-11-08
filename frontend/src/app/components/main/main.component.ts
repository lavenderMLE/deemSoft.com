import { Component, OnInit } from '@angular/core';

// Types of Student
import { Student } from 'src/app/types/student';

// Ngrx
import { select, Store } from "@ngrx/store";
import { GetStudentList } from 'src/app/redux/actions/student.action';
import { selectStudentList } from 'src/app/redux/selectors/student.selector';

// Service
import { StudentService } from 'src/app/redux/services/student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [StudentService]
})
export class MainComponent implements OnInit {

  studentsList: Student[] = [];
  loading : boolean = false;

  constructor(private store: Store, private studentService: StudentService) {
      this.store.pipe(select(selectStudentList)).subscribe((studentList)=> {
         this.studentsList = studentList ;
         if(this.studentsList.length)
           this.loading = false;
      });
      
      selectStudentList.release();

      this.studentService.getStudents().then((res: any) => {
        setTimeout(() => {
          this.store.dispatch(new GetStudentList({
            studentList: res
          }))
        }, 3000);
      }).catch((err : any) => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
