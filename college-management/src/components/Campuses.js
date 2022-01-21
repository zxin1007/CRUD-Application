import React from'react';
import {Link} from "react-router-dom";

function Campuses({props}) {
    return (
        <>
            <h1>Campus Listing</h1>

            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/campuses">Campuses</Link> |{" "}
                <Link to="/students">Students</Link>
            </nav>

            <h1>All Campuses</h1>
            {/*<ul>*/}
            {/*    {props.map(campus =>*/}
            {/*    <li>*/}
            {/*        Name: {campus.name}*/}
            {/*        <img src={campus.image} alt={campus.id}/>*/}
            {/*    </li>)}*/}
            {/*</ul>*/}
        </>
    );
}

export default Campuses;