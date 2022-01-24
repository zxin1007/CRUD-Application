import React from'react';
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
import CampusForm from "./CampusForm";

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight:300;
`;

export default function Campuses() {
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
    }, [setCampuses]);

    // Display either all existing campuses or an "error" message
    const renderCampus = () => {
        console.log(campuses.length);
        console.log(campuses)
        console.log(campuses.data)

        if (typeof campuses !== "string") {
            return <div className="campus-container">
                {campuses.map(campus => (
                    <div className="campus" key={campus.id}>
                        <img src={campus.img} alt=""/>

                        <div>
                        <StyledLink
                            style={{ display: "inline-block", margin: "1rem 0"}}
                                to={`/campuses/${campus.id}`}
                                key={campus.id}
                        >
                            <strong><em>{campus.name}</em></strong>
                        </StyledLink>

                        <button
                            onClick={() => {
                                deleteCampus(campus.id);
                                navigate("/campuses")
                            }}
                            className="delete-button"
                        >X</button>
                        </div>
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
                setCampuses(response.data)
                console.log(response);
            })
    };

    return (
        <div>
            <h2>All Campuses</h2>

            {campuses && renderCampus()}

            <CampusForm />
            <Outlet />
        </div>
    );
}