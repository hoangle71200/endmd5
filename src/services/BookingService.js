import axios from "axios";
export const getAllBooking = async () => {
    try {
        const response = await axios.get("http://localhost:8080/bookings")
        return response.data
    }catch (e) {
        console.log(e)
        return [];
    }

}

export const addBooking = async (booking) => {
    try {
        await axios.post("http://localhost:8080/bookings", booking);
    }catch (e) {
        console.log(e)
        throw e;
    }

}