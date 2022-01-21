import React from "react";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
