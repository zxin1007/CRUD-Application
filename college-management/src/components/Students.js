import React from'react';
import {Link, Outlet} from "react-router-dom";
import {getStudents} from "../data/students_data";
import '../Students.css';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    

`;

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
        <div class="studentDisplay">
            <h1>All Students</h1>

            {noStudents()}

            {students.map(student => (
                <ul>
                    <StyledLink
                        to={`/students/${student.id}`}
                        key={student.id}
                    >
                        <img src={student.image} alt=""></img>
                        <li>{student.lastName}, {student.firstName}</li>
                    </StyledLink>
                </ul>
            ))}

            <Outlet />
        </div>
    );
}

export default Students;