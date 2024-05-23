import {combineReducers} from "redux";
import {studentReducer} from "./StudentReducer";
import { bookingReducer } from "./BookingReducer";

// Tách nhỏ reducer thành nhiều hàm nhỏ hơn, xử lý cho từng state => clean code
const rootReducer = combineReducers({
    students: studentReducer,
    // teachers: teacherReducer,
    // username: usernameReducer
    bookings: bookingReducer
})

export default rootReducer;