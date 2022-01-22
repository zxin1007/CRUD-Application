import {useParams} from "react-router-dom";

export default function Campus() {
    let params = useParams();
    return <h2>Campus: {params.campusName}</h2>;
}