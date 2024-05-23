import * as bookingService from "../../services/BookingService"

export const getAllBookingMiddleware = () => {
    return async (dispatch) => {
        const bookings = await bookingService.getAllBooking();
        dispatch({
            payload: bookings,
            type: "GET_ALL_BOOKING"
        })
    }
}

export const addBookingMiddleware  = (booking) => async (dispatch) => {
    await bookingService.addBooking(booking);
    dispatch({
        payload: booking,
        type: "ADD_BOOKING"
    })
}