import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css';

function App() {
    return (
        <>
            <h1>Campus Listing</h1>

            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/campuses">Campuses</Link> |{" "}
                <Link to="/students">Students</Link>
            </nav>
        </>
    );
}

export default App;
