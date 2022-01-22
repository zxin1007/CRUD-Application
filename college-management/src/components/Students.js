import React from'react';
import {Link, Outlet} from "react-router-dom";
import {getStudents} from "../data/students_data";

function Students() {
    let students = getStudents();
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
            <h1>All Students</h1>

            {noStudents()}

            {students.map(student => (
                <ul style={{ display: "block", margin: "1rem 0"}}>
                    <Link
                        style={{ display: "inline-block", margin: "1rem 0"}}
                        to={`/students/${student.lastName}%20${student.firstName}`}
                        key={student.name}
                    >
                        <li>{student.lastName}, {student.firstName}</li>
                    </Link>
                </ul>
            ))}

            <Outlet />
        </>
    );
}

export default Students;