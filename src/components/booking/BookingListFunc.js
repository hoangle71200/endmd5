import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as bookingService from "../../services/BookingService"
import {ErrorMessage, Field, Form, Formik} from "formik";

import {useSelector} from "react-redux";

const BookingListFunc = () => {
   const bookings = useSelector(store => store.bookings);
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
            <h1>Thống kê đơn hàng</h1>
            {/* <Formik initialValues={form} onSubmit={onSubmit}>
                <Form>
                    <option value="">Vui lòng chọn sản phẩm</option>
                        {products.map((product) => (
                            <option key={product.id} value={JSON.stringify(product)}>{product.name}</option>
                        ))}
                    
                        <ErrorMessage name="product" component="span"></ErrorMessage>
                        <button type="submit">Thêm mới</button>
                </Form>
            </Formik> */}
            {/* <input type="text" onChange={(e) => setName(e.target.value)}/> */}
            <table border="1" width="500px">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã đơn hàng</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá(USD)</th>
                    <th>Loại sản phẩm</th>
                    <th>Ngày mua</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền(USD)</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking, index) =>
                    <tr key={booking.id}>
                        <td>{index+1}</td>
                        <td>{booking.id}</td>
                        <td>{booking.product.name}</td>
                        <td>{booking.product.price}</td>
                        <td>{booking.product.type}</td>
                        <td>{booking.date}</td>
                        <td>{booking.quantity}</td>
                        <td>{booking.total}</td>
                    </tr>
                )}
                </tbody>

            </table>
        </>
    )
}

export default BookingListFunc;