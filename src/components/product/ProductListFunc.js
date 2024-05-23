// import {useEffect, useState} from "react";
// import {Link, NavLink} from "react-router-dom";
// import * as bookingService from "../../services/BookingService"
// import {useSelector} from "react-redux";

// const ProductListFunc = () => {
//    const products = useSelector(store => store.products);
//     const [name, setName] = useState("");
//     const [number, setNumber] = useState(0);

//     useEffect(() => {
//         // getAll();
//     }, [name]);

//     useEffect(() => {
//         return () => {
//         }
//     }, [])

//     const increment = () => {
//         setNumber(prevState => prevState + 1);
//     }

//     return (
//         <>
//             <NavLink to="/create">
//                 <button>Thêm mới</button>
//             </NavLink>
//             <h1>{number}</h1>
//             <button onClick={increment}>Increment</button>
//             <h1>Danh sách học sinh</h1>
//             <input type="text" onChange={(e) => setName(e.target.value)}/>
//             <table border="1" width="500px">
//                 <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>Classroom</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {students.map((student, index) =>
//                     <tr key={student.id}>
//                         <td>{student.id}</td>
//                         <td>{student.name}</td>
//                         <td>{student.address}</td>
//                         <td>{student.classroom.nameClass}</td>
//                     </tr>
//                 )}
//                 </tbody>

//             </table>
//         </>
//     )
// }

// export default StudentListFunc;