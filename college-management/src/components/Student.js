import {useParams} from "react-router-dom";
import {getStudent} from "../data/students_data";

export default function Student() {
    let params = useParams();
    let student = getStudent(parseInt(params.studentId), 10)

    return (
        <>
            <h2>{student.firstName} {student.lastName}</h2>
            <p>{student.image}</p>
            <h3>Email address:</h3>
            <p>{student.email}</p>
            <h3>GPA:</h3>
            <p>{student.gpa}</p>
            <h3>Campus:</h3>
            <p>{student.campus}</p>
        </>
    )
}