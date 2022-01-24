import {useParams, useNavigate} from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Student() {
    let params = useParams();
    let navigate = useNavigate();

    let studentId = parseInt(params.studentId);
    console.log("Student ID:" + studentId)

    // It's now 4:16 AM, and I'm trying to apply the Campus() logic
    // to Student(). Pleasedon'trunintoanymorebugs.
    const [id, setId] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gpa, setGPA] = React.useState("");
    const [campus, setCampus] = React.useState("");
    const [img, setImg] = React.useState("");

    // Load campus API from local host
    React.useEffect(async () => {
        try {
            await axios.get(`http://localhost:3001/api/student/${studentId}`)
                .then((response) => {
                    console.log(response)
                    setId(response.data.student.id);
                    setFname(response.data.student.firstName)
                    setLname(response.data.student.lastName)
                    setEmail(response.data.student.email)
                    setGPA(response.data.student.gpa)
                    setCampus(response.data.student.campus)
                    setImg(response.data.student.img)
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const deleteStudent = (studentId) => {
        axios.delete(`http://localhost:3001/api/campus/${studentId}`,
            {params: {id: studentId}})
            .then(response => {
                console.log(response);
            })
    };

    const noCampus = () => {
        if (campus !== undefined) {
            return <p>{campus}</p>
        } else {
            return <p>This student doesn't belong to a campus.</p>
        }
    }
    return (
        <>
            <img src={img} />
            <h2>{fname} {lname}</h2>
            <p>{img}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>GPA</h3>
            <p>{gpa}</p>
            <h3>Campus</h3>
            {noCampus()}


            <div>
            <button onClick={() => {
                deleteStudent(id);
                navigate("/campuses")
            }}>X</button> Remove Campus
            </div>
        </>
    )
}