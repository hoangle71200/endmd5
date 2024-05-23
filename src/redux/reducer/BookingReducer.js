export const bookingReducer = (bookings = [], action) => {
    switch (action.type) {
        case "ADD_BOOKING":

            return [...bookings, action.payload];
        case "REMOVE_BOOKING":
    //
        case "REMOVE_ALL_BOOKING":
    //
        case "GET_ALL_BOOKING" :
            return action.payload;
        default :
            return bookings;

    }
}