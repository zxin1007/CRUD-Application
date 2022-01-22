import React from'react';
import {Link, Outlet} from "react-router-dom";
import {getStudents} from "../data/students_data";

function Students() {
    let students = getStudents();
    students.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)  // Sort alphabetically
    );

    return (
        <>
            <h1>All Students</h1>
            {/*<ul>*/}
            {/*    {props.map(student =>*/}
            {/*        <li>*/}
            {/*            Name: {student.name}*/}
            {/*        </li>)}*/}
            {/*</ul>*/}

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