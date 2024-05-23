import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as studentService from "../../services/StudentService"
import {useSelector} from "react-redux";

const StudentListFunc = () => {
   const students = useSelector(store => store.students);
    // const [name, setName] = useState("");

    // useEffect(() => {
    //     // getAll();
    // }, [name]);

    // useEffect(() => {
    //     return () => {
    //     }
    // }, [])

    return (
        <>
            <NavLink to="/create">
                <button>Thêm mới</button>
            </NavLink>
            <h1>Danh sách học sinh</h1>
            {/* <input type="text" onChange={(e) => setName(e.target.value)}/> */}
            <table border="1" width="500px">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Classroom</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                        <td>{student.classroom.nameClass}</td>
                    </tr>
                )}
                </tbody>

            </table>
        </>
    )
}

export default StudentListFunc;