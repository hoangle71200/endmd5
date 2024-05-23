import axios from "axios";
export const getAll = async () => {
    try {
        const response = await axios.get("http://localhost:8080/students")
        return response.data
    }catch (e) {
        console.log(e)
        return [];
    }

}

export const addStudent = async (student) => {
    try {
        await axios.post("http://localhost:8080/students", student);
    }catch (e) {
        console.log(e)
        throw e;
    }

}