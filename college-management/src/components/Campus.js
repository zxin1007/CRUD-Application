import {useParams} from "react-router-dom";
import {getCampus} from "../data/campuses_data";
import '../Campuses.css';

export default function Campus() {
    let params = useParams();
    let campus = getCampus(parseInt(params.campusId), 10)

    return (
        <div class="campusInfo">
            <h2>{campus.name}</h2>
            <img class="campus-extended-img" src={campus.image} alt=""></img>
            <h3>Address: {campus.address}</h3>
            <h3>Description</h3>
            <em>{campus.description}</em>
        </div>
    )
}