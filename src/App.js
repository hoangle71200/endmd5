// import logo from './logo.svg';
// import './App.css';

//
import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import StudentList from "./components/student/StudentList";
import StudentListFunc from "./components/student/StudentListFunc";
import StudentCreate from "./components/student/StudentCreate";

import BookingList from './components/booking/BookingList';
import BookingListFunc from './components/booking/BookingListFunc';


import {BrowserRouter, HashRouter, NavLink, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {getAllStudentMiddleware} from "./redux/middleware/StudentMiddleware";

import { getAllBookingMiddleware } from './redux/middleware/BookingMiddleware';
 
import {useDispatch, useSelector} from "react-redux";
import StudentUpdate from "./components/student/StudentUpdate";
import BookingCreate from './components/booking/BookingCreate';


//

function App() {
  const dispatch = useDispatch();
  // const students = useSelector(store => store.students)
  const bookings = useSelector(store => store.bookings)



  // useEffect(() => {
  //   dispatch(getAllStudentMiddleware());
  // }, []);

  useEffect(() => {
    dispatch(getAllBookingMiddleware());
  }, []);

  return (
      <>
        <h1>Số lượng booking {bookings.length}</h1>
                <BrowserRouter>
                  <NavLink to="/bookings">List</NavLink>
                  <NavLink to="/create">Create</NavLink>
                  <Routes>
                    <Route path="bookings" element={<BookingListFunc/>}></Route>
                    {/* <Route path="students/:id" element={<StudentUpdate/>}></Route> */}
                    <Route path="create" element={<BookingCreate/>}></Route>
                  </Routes>
                </BrowserRouter>
                <ToastContainer />
      </>
  );
}

export default App;
