import React from'react';
import axios from 'axios';
import {Link, Outlet} from "react-router-dom";
// import {getStudents} from "../data/students_data";
import StudentForm from "./StudentForm";

function Students() {
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
    }, []);

    students.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)  // Sort alphabetically
    );

    const noStudents = () => {
        console.log(students.length);
        if (students.length === 0) {
            return <p>No student exists in the database.</p>
        }
    }

    return (
        <>
            <h2>All Students</h2>

            {noStudents()}

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
                </ul>
            ))}

            <StudentForm />

            <Outlet />
        </>
    );
}

export default Students;