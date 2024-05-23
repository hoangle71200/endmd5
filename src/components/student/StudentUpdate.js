import {useParams} from "react-router-dom";
import {useEffect} from "react";

const StudentUpdate = () => {
    const params = useParams();
    console.log(params)
    useEffect(() => {
        getStudentById(params.id);
    }, []);
    const getStudentById = (id) => {

    }
}
export default StudentUpdate;