import React from'react';
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
import StudentForm from "./StudentForm";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Students() {
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

            return <div className="studentDisplay">
                {students.map(student => (
                    <ul key={student.id}>
                        <StyledLink
                            to={`/students/${student.id}`}
                            key={student.id}
                        >
                            <img src={student.img} alt=""/>
                            <li>{student.lastName}, {student.firstName}</li>
                        </StyledLink>

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
