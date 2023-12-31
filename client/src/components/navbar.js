import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/home" className="tablink">
          Home
        </Link>
        <Link to="/items" className="tablink">
          Items
        </Link>

        {/* Floors Tab */}
        <div
          className={`tablink split-dropdown ${showDropdown ? 'active' : ''}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown} // Close dropdown when mouse leaves
  
          
        >
          <Link to="/floors" className="split-tab">Floors</Link>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/floors/s" className="subtablink">
                S
              </Link>
              <Link to="/floors/nons" className="subtablink">
                NonS
              </Link>
              <Link to="/floors/floordiff" className="subtablink">
                FloorDiff
              </Link>
            </div>
          )}
        </div>

        <Link to="/about" className="tablink">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
  