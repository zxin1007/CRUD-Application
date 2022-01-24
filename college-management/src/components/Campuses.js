import React from'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {getCampuses, deleteCampus} from "../data/campuses_data";
import '../Campuses.css';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight:300;
`;

function Campuses() {
    let navigate = useNavigate();
    let campuses = getCampuses();

    const noCampus = () => {
        console.log(campuses.length);
        if (campuses.length === 0) {
            return <p>No campus exists in the database.</p>
        }
    }

    return (
        <div class="campusDisplay">
            <h1>All Campuses</h1>

            {noCampus()}

            {campuses.map(campus => (
                <div class="campus">
                    <img src={campus.image} alt=""></img>

                    <div>
                    <StyledLink
                        style={{ display: "inline-block", margin: "1rem 0"}}
                        to={`/campuses/${campus.id}`}
                        key={campus.name}
                    >
                        <strong><em>{campus.name}</em></strong>
                    </StyledLink>

                    <button onClick={() => {
                            deleteCampus(campus.name);
                            navigate("/campuses")
                        }}>X</button> 
                    </div>
                    

                    

                        
                </div>
            ))}

            <Outlet />
        </div>
    );
}

export default Campuses;