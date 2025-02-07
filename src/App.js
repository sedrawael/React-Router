import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/a">Home</Link></li>
            <li><Link to="/b">About</Link></li>
            <li><Link to="/c">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/a" element={<Home />} />
          <Route path="/b" element={<About />} />
          <Route path="/c" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



