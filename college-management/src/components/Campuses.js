import React from'react';
import {Link, Outlet} from "react-router-dom";
import {getCampuses} from "../data/campuses_data";

function Campuses() {
    let campuses = getCampuses();

    return (
        <>
            <h2>All Campuses</h2>
            {/*<ul>*/}
            {/*    {props.map(campus =>*/}
            {/*    <li>*/}
            {/*        Name: {campus.name}*/}
            {/*        <img src={campus.image} alt={campus.id}/>*/}
            {/*    </li>)}*/}
            {/*</ul>*/}

            {campuses.map(campus => (
                <span style={{ display: "block", margin: "1rem 0"}}>
                    <Link
                        style={{ display: "inline-block", margin: "1rem 0"}}
                        to={`/campuses/${campus.name}`}
                        key={campus.name}
                    >
                        {campus.name}
                    </Link>

                    <span style={{ display: "block", margin: "1rem 0"}}>
                        {campus.image}
                    </span>
                </span>
            ))}

            <Outlet />
        </>
    );
}

export default Campuses;