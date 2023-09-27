import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../styles/home.css'
const Home = () => {
  return (
    <div>
        <nav>
         <Link to="/home" className="tablink" >Home</Link>
         <Link to="/items" className="tablink" >Items</Link>
         <Link to="/floors" className="tablink" >Floors</Link>
         </nav>
         <Routes>
          <Route path="/items" element={<div id="Items" className="tabcontent">
           <h3>Items</h3>
           </div>} />
          <Route path="/floors" element={<div id="Floors" className="tabcontent">
           </div>} />
          <Route path="/*" element={<div id="Home" className="tabcontent">
           <h3>Home (Default)</h3>
           </div>} /> {/* Default route */}
           <Route path="/home" element={<div id="Items" className="tabcontent">
           <h3>Home</h3>
           </div>} />
         </Routes>
    </div>
    );
};

export default Home;