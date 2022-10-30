import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { StudentAction, GetStudentList } from "../actions/student.action";
import { StudentService } from "../services/student.service";
import { mergeMap, mergeWith } from "rxjs";

@Injectable()

export class StudentEffects {
  @Effect()
  loadStudentsList$ = this.actions$.pipe(
    ofType(StudentAction.GetStudentList),
    mergeMap(() =>
      this.studentService.getStudents().then((res:any) => {
          console.log('ddd') ;
          new GetStudentList({
            studentList : res.data
          })
        })
        .catch((err : any) => {
          console.log(err) ;
        })
    )
  )

  constructor( private actions$ : Actions, private studentService : StudentService)
  {

  }
}



