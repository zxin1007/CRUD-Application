import React from'react';
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
// import {deleteCampus} from "../data/campuses_data";
import CampusForm from "./CampusForm";

function Campuses() {
    let navigate = useNavigate();

    const [campuses, setCampuses] = React.useState([]);

    // Load students API from local host
    React.useEffect(async () => {
        try {
            await axios.get("http://localhost:3001/api/campus")
                .then((response) => {
                    console.log(response.data)
                    setCampuses(response.data)
                    console.log(campuses);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

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

            <div className="campus-container">
            {campuses.map(campus => (
                <div key={campus.name}>
                    <Link to={`/campuses/${campus.id}`}
                          key={campus.name}
                          style={{textDecoration: 'none',
                          }}
                    >
                        {campus.name}
                    </Link>

                    <p>
                        <img src={campus.img} width="200px"/>
                    </p>

                    {/*Todo*/}
                    {/*<button*/}
                    {/*    onClick={() => {*/}
                    {/*        deleteCampus(campus.name);*/}
                    {/*        navigate("/campuses")}}*/}
                    {/*    className="delete-button"*/}
                    {/*>X</button>*/}
                </div>
            ))}
            </div>

            <CampusForm />

            <Outlet />
        </>
    );
}

export default Campuses;