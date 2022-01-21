import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import './index.css';
import Campuses from "./components/Campuses";
import Students from "./components/Students";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="home" element={<App/>} />
            <Route path="campuses" element={<Campuses />} />
            <Route path="students" element={<Students />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
