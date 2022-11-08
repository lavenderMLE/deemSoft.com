import { StudentAction, StudentUnion } from "../actions/student.action";

import { Student } from "../../types/student";

export interface StudentState {
    studentList : Student[];
}

const initialState : StudentState = {
    studentList : []
}

export function studentReducer(state: StudentState = initialState, action : StudentUnion)
{
    switch(action.type) {
        case StudentAction.GetStudentList:
            return {
                ...state,
                studentList : action.payload.studentList,
            }
        default:
            return state;
    }
}