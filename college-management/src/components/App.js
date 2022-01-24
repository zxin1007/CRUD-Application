import React from 'react';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';
import '../App.css';
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding-left: 1rem;
    text-decoration: none;
    color: white;
`;

function App() {
    return (
        <>
            <nav>
                <h2>Campus Listing</h2>
                <ul>
                    <StyledLink to="/home">Home</StyledLink> 
                    <StyledLink to="/campuses">Campuses</StyledLink>
                    <StyledLink to="/students">Students</StyledLink>   
                </ul>
               
            </nav>

            <Outlet />
        </>
    );
}

export default App;
