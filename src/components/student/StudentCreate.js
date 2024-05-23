import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as studentService from "../../services/StudentService";
import {useDispatch} from "react-redux";
import {addStudentMiddleware} from "../../redux/middleware/StudentMiddleware";
import * as classroomService from "../../services/ClassroomService"

function StudentCreate() {
    const [form, setForm] = useState({
        id: "",
        name: "",
        address: "",
        classroom: ""
    });

    const [classrooms, setClassrooms] = useState([]);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const validateStudent = {
        id: Yup.number().required("ID không được để trống")
            .min(0, "ID không được nhỏ hơn 0")
            .max(10000000000),
        name: Yup.string().required("Name không được để trống")
            .min(4, "Name không được nhỏ hơn 4 kí tự")
            .matches(/^[A-Za-z ]{4,100}$/),
        classroom: Yup.string().required("Classroom không được để trống")
    }
    //
    useEffect(() => {
        console.log(form);
    }, [form]);

    useEffect(() => {
        getAllClassroom();
    }, [])

    const getAllClassroom = async () => {
        const data = await classroomService.getAllClassroom();
        console.log(data);
        setClassrooms(data);
    }
    const onSubmit = async (value) => {
        // Tắt mặc định của thẻ/sự kiện
        // e.preventDefault();
        console.log(form)
        console.log(value)
        value.classroom = JSON.parse(value.classroom)
        value.id = +value.id;
        //     Thêm mới thành công (API client)
        try {
            dispatch(addStudentMiddleware(value));
            toast.success("Thêm mới thành công")
            navigate("/students")
        } catch (e) {
            console.log("Lỗi")
            toast.error("Lỗi");
        }




    }
    //
    // const changeForm = (e) => {
    //     setForm({
    //         ...form,
    //         // keys
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <>
            {/*<form>*/}
            {/*    <label htmlFor="id">Name</label>*/}
            {/*    <input type="text" name="id" id="id" value={form.id} onChange={changeForm}/>*/}
            {/*    <label htmlFor="name">Name</label>*/}
            {/*    <input type="text" name="name" id="name" value={form.name} onChange={changeForm}/>*/}
            {/*    <label htmlFor="address">Name</label>*/}
            {/*    <input type="text" name="address" id="address"  value={form.address} onChange={changeForm}/>*/}
            {/*    <button onClick={onSubmit} type="submit">Thêm mới</button>*/}
            {/*</form>*/}
            <Formik initialValues={form} onSubmit={onSubmit} validationSchema={Yup.object(validateStudent)}>
                <Form>
                    {/*Làm thế nào để chuyển thành input type number*/}
                    ID<Field name="id"></Field>
                    <ErrorMessage name="id" component="span"></ErrorMessage>
                    Name<Field name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage>
                    Address<Field name="address"></Field>
                    Classroom<Field name="classroom" as="select">
                    <option value="">Vui lòng chọn lớp</option>
                    {classrooms.map((classrooms) => (
                        <option key={classrooms.id} value={JSON.stringify(classrooms)}>{classrooms.nameClass}</option>
                    ))}

                </Field>
                    <ErrorMessage name="classroom" component="span"></ErrorMessage>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}

export default StudentCreate;