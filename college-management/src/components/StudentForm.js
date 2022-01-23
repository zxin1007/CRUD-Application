import React from 'react'

export default function StudentForm() {
    const [student, setStudent] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    return (
        <>
            Add a new student:
            <form>
                <label>First Name:<br/>
                    <input type="text"
                           name="firstName"
                           onChange={event => setStudent(event.target.value)}
                    />
                </label><br/>
                <label>Last Name:<br/>
                    <input type="text"
                           name="lastName"
                           onChange={event => setStudent(event.target.value)}
                    />
                </label><br/>
                <label>Email:<br/>
                    <input type="email"
                           name="email"
                           placeholder="yourname@example.com"
                           onChange={event =>
                               setStudent({...student, [event.target.name]: event.target.value})}
                    />
                </label><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}