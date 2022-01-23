import {useNavigate, useParams} from "react-router-dom";
import {deleteStudent, getStudent} from "../data/students_data";
import React from "react";

export default function Student() {
    let navigate = useNavigate();
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

            <button onClick={() => {
                    deleteStudent(student.id);
                    navigate("/students")
                }}>X</button> Remove Student
        </>
    )
}