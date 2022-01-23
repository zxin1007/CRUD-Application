import {useParams, useNavigate} from "react-router-dom";
import {getCampus, deleteCampus} from "../data/campuses_data";
import React from "react";

export default function Campus() {
    let params = useParams();
    let navigate = useNavigate();
    let campus = getCampus(parseInt(params.campusId), 10)

    return (
        <>
            <h2>{campus.name}</h2>
            <p>{campus.image}</p>
            <h3>Address</h3>
            <p>{campus.address}</p>
            <h3>Description</h3>
            <p>{campus.description}</p>
            <p>{campus.students}</p>

            <button onClick={() => {
                deleteCampus(campus.name);
                navigate("/campuses")
            }}>X</button> Remove Campus
        </>
    )
}