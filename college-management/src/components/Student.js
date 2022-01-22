import {useParams} from "react-router-dom";

export default function Student() {
    let params = useParams();
    return (
        <>
            <h2>Student Name: {params.studentName}</h2>
        </>
    );
}