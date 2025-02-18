
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
