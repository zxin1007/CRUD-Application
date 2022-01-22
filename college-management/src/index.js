import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import Campus from "./components/Campus";
import Student from "./components/Student"
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="home" element={<App />} />
            <Route path="/" element={<App />} >
                <Route path="campuses" element={<Campuses />} >
                    <Route path="campusName" element={<Campus />} />
                </Route>

                <Route path="students" element={<Students />} >
                    <Route path="studentName" element={<Student />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
