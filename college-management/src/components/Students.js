import React from'react';
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
// import {getStudents} from "../data/students_data";
import StudentForm from "./StudentForm";

function Students() {
    let navigate = useNavigate();

    const [students, setStudents] = React.useState([]);

    // Load students API from local host
    React.useEffect(async () => {
        try {
            await axios.get("http://localhost:3001/api/student")
                .then((response) => {
                    console.log(response.data)
                    setStudents(response.data)
                    console.log(students);
                });
        } catch (error) {
            console.log(error);
        }
    }, [setStudents]);

    // Display either all existing campuses or an "error" message
    const renderStudent = () => {
        console.log(students.length);
        if (typeof students !== "string") {
            // Alphabetically sort students
            students.sort((a, b) =>
                a.lastName.localeCompare(b.lastName)
            );

            return <>
                {students.map(student => (
                    <ul style={{ display: "block", margin: "1rem 0"}}
                        key={student.id}>
                        <Link
                            style={{ display: "inline-block", margin: "1rem 0", textDecoration: "none"}}
                            to={`/students/${student.id}`}
                            key={student.id}
                        >
                            <li>{student.lastName}, {student.firstName}</li>
                        </Link>

                        <button
                            onClick={() => {
                                deleteStudent(student.id);
                                navigate("/students")}}
                            className="delete-button"
                        >X</button>
                    </ul>
                ))}
                </>
        } else {
            return <p>No student exists in the database.</p>
        }
    }

    const deleteStudent = (studentId) => {
        axios.delete(`http://localhost:3001/api/student/${studentId}`,
            {params: {id: studentId}})
            .then(response => {
                setStudents(response.data)
                console.log(response);
            })
    };

    return (
        <>
            <h2>All Students</h2>

            {students && renderStudent()}

            <StudentForm />

            <Outlet />
        </>
    );
}

export default Students;