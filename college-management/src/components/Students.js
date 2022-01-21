import React from'react';
import {Link} from "react-router-dom";

function Students({props}) {
    return (
        <>
            <h1>Campus Listing</h1>

            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/campuses">Campuses</Link> |{" "}
                <Link to="/students">Students</Link>
            </nav>

            <h1>All Students</h1>
            {/*<ul>*/}
            {/*    {props.map(student =>*/}
            {/*        <li>*/}
            {/*            Name: {student.name}*/}
            {/*        </li>)}*/}
            {/*</ul>*/}
        </>
    );
}

export default Students;