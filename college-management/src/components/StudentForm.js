import React from 'react'
import axios from "axios";

export default function StudentForm() {
    const [student, setStudent] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        gpa: ""
    });

    // Prepare to post using form input data
    const handleChange = (event) => {
        setStudent(prevState => {
            return {...student, [event.target.name]: event.target.value}
        })
    }

    // POST request
    const addStudent = (event) => {
        event.preventDefault();
        console.log(student);

        axios.post("http://localhost:3001/api/student", student)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
            Add a new student:
            <form onSubmit={addStudent}>
                <label>First Name:<br/>
                    <input type="text"
                           name="firstName"
                           onChange={handleChange}
                    />
                </label><br/>
                <label>Last Name:<br/>
                    <input type="text"
                           name="lastName"
                           onChange={handleChange}
                    />
                </label><br/>
                <label>Email:<br/>
                    <input type="email"
                           name="email"
                           placeholder="yourname@example.com"
                           onChange={handleChange}
                    />
                </label><br/>
                <label>GPA:<br/>
                    <input type="number" step="any"
                           name="gpa"
                           onChange={handleChange}
                    />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}