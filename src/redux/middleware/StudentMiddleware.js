import * as studentService from "../../services/StudentService"

export const getAllStudentMiddleware = () => {
    return async (dispatch) => {
        const students = await studentService.getAll();
        dispatch({
            payload: students,
            type: "GET_ALL_STUDENT"
        })
    }
}

export const addStudentMiddleware  = (student) => async (dispatch) => {
    await studentService.addStudent(student);
    dispatch({
        payload: student,
        type: "ADD_STUDENT"
    })
}