import { Action } from "@ngrx/store";

import { Student } from "src/app/types/student";

export enum StudentAction {
    GetStudentList = 'GetStudentList',
}

export class GetStudentList implements Action {
    readonly type = StudentAction.GetStudentList;

    constructor( public payload: { studentList : Student [] } ) {}
}

export type StudentUnion = GetStudentList ;
