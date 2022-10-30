import { StudentAction, StudentUnion } from "../actions/student.action";

import { Student } from "../../types/student";

export interface StudentState {
    studentsList : Student[];
}

const initialState : StudentState = {
    studentsList : []
}

export function studentReducer(state: StudentState = initialState, action : StudentUnion)
{
    switch(action.type) {
        case StudentAction.GetStudentList:
            return {
                ...state,
                studentsList : action.payload.studentList,
            }
        default:
            return state;
    }
}