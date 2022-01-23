import {useParams} from "react-router-dom";
import {getCampus} from "../data/campuses_data";

export default function Campus() {
    let params = useParams();
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
        </>
    )
}