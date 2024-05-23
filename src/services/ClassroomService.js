import axios from 'axios';

export const getAllClassroom = async () => {
    try {
        const response = await axios.get("http://localhost:8080/classrooms")
    return response.data;
    } catch (e) {
        console.error(e)
        return [];
    }

}