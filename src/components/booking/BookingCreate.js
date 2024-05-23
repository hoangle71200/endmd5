import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as bookingService from "../../services/BookingService";
import {useDispatch} from "react-redux";
import { addBookingMiddleware } from "../../redux/middleware/BookingMiddleware";
// import * as classroomService from "../../services/ClassroomService"
import * as productService from "../../services/ProductService";

function BookingCreate() {
    const [form, setForm] = useState({
        id: "",
        date: "",
        total: "",
        quantity: "",
        product: ""
    });

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const validateBookings = {
        id: Yup.number().required("ID không được để trống")
            .min(0, "ID không được nhỏ hơn 0")
            .max(10000000000),
        quantity: Yup.number().required("Số lượng không được để trống")
            .min(1, "Số lượng hải lớn hơn 0")
            .max(10000000000),
        date: Yup.string().required("Date không được để trống")
            // .max(Date.now, "Ngày mua không được lớn hơn ngày hiện tại")
            // .matches(/^[A-Za-z ]{4,100}$/),
            ,
        product: Yup.string().required("Product không được để trống")
    }
    //
    useEffect(() => {
        console.log(form);
    }, [form]);

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = async () => {
        const data = await productService.getAllProduct();
        console.log(data);
        setProducts(data);
    }
    const onSubmit = async (value) => {
        // Tắt mặc định của thẻ/sự kiện
        // e.preventDefault();
        console.log(form)
        console.log(value)
        value.product = JSON.parse(value.product)
        value.id = +value.id;
        value.total = value.quantity*value.product.price;
        //     Thêm mới thành công (API client)
        try {
            dispatch(addBookingMiddleware(value));
            toast.success("Thêm mới thành công")
            navigate("/bookings")
        } catch (e) {
            console.log("Lỗi")
            toast.error("Lỗi");
        }
    }

    return (
        <>
            <Formik initialValues={form} onSubmit={onSubmit} validationSchema={Yup.object(validateBookings)}>
                <Form>
                    {/*Làm thế nào để chuyển thành input type number*/}
                    ID<Field name="id"></Field>
                    <ErrorMessage name="id" component="span"></ErrorMessage>
                    Date<Field name="date"></Field>
                    <ErrorMessage name="date" component="span"></ErrorMessage>
                    <Field name="total" type = "hidden"></Field>

                    Quantity<Field name="quantity"></Field>
                    <ErrorMessage name="quantity" component="span"></ErrorMessage>
                    Product<Field name="product" as="select">
                    <option value="">Vui lòng chọn sản phẩm</option>
                    {products.map((product) => (
                        <option key={product.id} value={JSON.stringify(product)}>{product.name}</option>
                    ))}</Field>
                    <ErrorMessage name="product" component="span"></ErrorMessage>
                    
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}

export default BookingCreate;