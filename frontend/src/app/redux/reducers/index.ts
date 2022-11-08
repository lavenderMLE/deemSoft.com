import { ActionReducerMap } from "@ngrx/store";
import * as Student from "./student.reducer";

export interface State {
    student: Student.StudentState;
}

export const reducers : ActionReducerMap<State, any> = {
    student : Student.studentReducer
}
