import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
  
  return (
    <div>
            <nav>
                <Link to="/home" className="tablink">Home</Link>
                <Link to="/items" className="tablink">Items</Link>
                
                {/* Floors Tab */}
                <div className="tablink" onHover={toggleDropdown}>
                    Floors

                    {showDropdown && (
                        <div className="dropdown-content">
                            <Link to="/floors/s" className="subtablink">S</Link>
                            <Link to="/floors/nons" className="subtablink">NonS</Link>
                        </div>
                    )}
                </div>
                <Link to="/about" className="tablink">About</Link>
            </nav>
            </div>
    );
};

export default Navbar;