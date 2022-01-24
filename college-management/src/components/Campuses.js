import React from'react';
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
// import {deleteCampus} from "../data/campuses_data";
import CampusForm from "./CampusForm";

function Campuses() {
    let navigate = useNavigate();

    const [campuses, setCampuses] = React.useState([]);

    // Load campus API from local host
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

    const renderCampus = () => {
        console.log(campuses.length);
        console.log(campuses)

        if (campuses !== undefined) {
            return <div className="campus-container">
                {campuses.map(campus => (
                    <div key={campus.id}>
                        <Link to={`/campuses/${campus.id}`}
                              key={campus.id}
                              style={{textDecoration: 'none',
                              }}
                        >
                            {campus.name}
                        </Link>

                        <p>
                            <img src={campus.img} width="200px"/>
                        </p>


                        <button
                            onClick={() => {
                                deleteCampus(campus.id);
                                navigate("/campuses")}}
                            className="delete-button"
                        >X</button>
                    </div>
                ))}
            </div>
        } else {
            return <p>No campus exists in the database.</p>
        }
    }

    const deleteCampus = (campusId) => {
        axios.delete(`http://localhost:3001/api/campus/${campusId}`,
            {params: {id: campusId}})
            .then(response => {
                setCampuses(prevState => {
                    return {
                        campuses: prevState.campuses.filter(campus =>
                        campus.id !== campusId)
                    }
                })
                console.log(response);
            })
    };

    return (
        <>
            <h2>All Campuses</h2>

            {campuses && renderCampus()}

            <CampusForm />
            <Outlet />
        </>
    );
}

export default Campuses;