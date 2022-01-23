import React from'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {getCampuses, deleteCampus} from "../data/campuses_data";
import CampusForm from "./CampusForm";

function Campuses() {
    let navigate = useNavigate();
    let campuses = getCampuses();

    const noCampus = () => {
        console.log(campuses.length);
        if (campuses.length === 0) {
            return <p>No campus exists in the database.</p>
        }
    }
    // Image URL validation
    // function isValidHttpUrl(string) {
    //     let url;
    //
    //     try {
    //         url = new URL(string);
    //     } catch (_) {
    //         return false;
    //     }
    //
    //     return url.protocol === "http:" || url.protocol === "https:";
    // }

    // for (let image in campuses) {
    //     if (!isValidHttpUrl(campuses[image].image)) {
    //         campuses[image].image = "No image is available";
    //     }
    // }

    return (
        <>
            <h2>All Campuses</h2>

            {noCampus()}

            <div className="campus-container">
            {campuses.map(campus => (
                <div>
                    <Link to={`/campuses/${campus.id}`}
                          key={campus.name}
                          style={{textDecoration: 'none',
                          }}
                    >
                        {campus.name}
                    </Link>

                    <p>
                        <img src={campus.image} width="200px"/>
                    </p>

                    <button
                        onClick={() => {
                            deleteCampus(campus.name);
                            navigate("/campuses")}}
                        className="delete-button"
                    >X</button>

                </div>
            ))}
            </div>

            <CampusForm />

            <Outlet />
        </>
    );
}

export default Campuses;