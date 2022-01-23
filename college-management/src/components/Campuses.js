import React from'react';
import {Link, Outlet} from "react-router-dom";
import {getCampuses} from "../data/campuses_data";

function Campuses() {
    let campuses = getCampuses();

    const noCampus = () => {
        console.log(campuses.length);
        if (campuses.length === 0) {
            return <p>No campus exists in the database.</p>
        }
    }

    return (
        <>
            <h2>All Campuses</h2>

            {noCampus()}

            {campuses.map(campus => (
                <span style={{ display: "block", margin: "1rem 0"}}>
                    <Link
                        style={{ display: "inline-block", margin: "1rem 0"}}
                        to={`/campuses/${campus.id}`}
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