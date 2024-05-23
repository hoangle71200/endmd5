import axios from 'axios';

export const getAllProduct = async () => {
    try {
        const response = await axios.get("http://localhost:8080/products")
    return response.data;
    } catch (e) {
        console.error(e)
        return [];
    }

}