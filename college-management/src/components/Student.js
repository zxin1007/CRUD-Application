import {useParams} from "react-router-dom";
import {getStudent} from "../data/students_data";
import '../Students.css';


export default function Student() {
    let params = useParams();
    let student = getStudent(parseInt(params.studentId), 10)

    return (
        <div class="studentInfo">
            <img class="student-extended-img" src={student.image} alt=""></img>
            <h2>{student.firstName} {student.lastName}</h2>
            <h3>Email address: {student.email}</h3>
            <h3>GPA: {student.gpa}</h3>
            <h3>Campus: {student.campus}</h3>
        </div>
    )
}