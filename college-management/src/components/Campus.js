import {useParams, useNavigate} from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Campus() {
    let params = useParams();
    let navigate = useNavigate();

    let campusId = parseInt(params.campusId);
    console.log(campusId)

    // I see the need for useReducer() now, but it is 4:03 AM Eastern.
    // I've spent the past 5 hours trying to make this work without
    // making so many states. I need to sleep. - Lucy
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [img, setImg] = React.useState("");
    const [desc, setDesc] = React.useState("");

    // Load campus API from local host
    React.useEffect(async () => {
        try {
            await axios.get(`http://localhost:3001/api/campus/${campusId}`)
                .then((response) => {
                    console.log(response.data.campus)
                    setName(response.data.campus.name)
                    setAddress(response.data.campus.address)
                    setCity(response.data.campus.city)
                    setState(response.data.campus.state)
                    setZip(response.data.campus.zip)
                    setImg(response.data.campus.img)
                    setDesc(response.data.campus.description)
                    console.log(name)
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const deleteCampus = (campusId) => {
        axios.delete(`http://localhost:3001/api/campus/${campusId}`,
            {params: {id: campusId}})
            .then(response => {
                console.log(response);
            })
    };

    return (
        <>
            <h2>{name}</h2>
            <p>{img}</p>
            <h3>Address</h3>
            <p>
                {address}<br/>
                {city}, {state} {zip}
            </p>

            <h3>Description</h3>
            <p>{desc}</p>
            {/*<p>{campus.campus.students[0]}</p>*/}

            <button onClick={() => {
                deleteCampus(name);
                navigate("/campuses")
            }}>X</button> Remove Campus
        </>
    )
}