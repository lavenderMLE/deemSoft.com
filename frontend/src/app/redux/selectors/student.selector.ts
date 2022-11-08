import { createSelector } from "@ngrx/store";
import { State } from "../reducers";
import { StudentState } from "../reducers/student.reducer";

const selectStudent : any= (state: State) => state.student;

export const selectStudentList = createSelector(
    selectStudent, ( state : StudentState ) => state.studentList
)