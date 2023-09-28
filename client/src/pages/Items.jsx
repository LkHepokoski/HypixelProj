import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../styles/items.css';


const Items = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };
  const [items, setItems] = useState([]);
/*
  useEffect(() => {
    axios.get("http://localhost:8800/items") // Replace with your backend URL
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  */

        return (
          <div>
            <nav>
                <Link to="/home" className="tablink">Home</Link>
                <Link to="/items" className="tablink">Items</Link>
                
                {/* Floors Tab */}
                <div className="tablink" onClick={toggleDropdown}>
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

            <Routes>
                <Route path="/items" element={<div id="Items" className="tabcontent">
                    <h3>Items</h3>
                </div>} />

                {/* Floors Tab */}
                <Route path="/floors" element={
                    <div id="Floors" className="tabcontent">
                        <h3>Floors</h3>
                    </div>
                } />

                {/* Subtab Routes */}
                <Route path="/floors/s" element={<div id="s" className="subtabcontent">
                    <h3>S</h3>
                </div>} />
                <Route path="/floors/nons" element={<div id="nons" className="subtabcontent">
                    <h3>Non-S</h3>
                </div>} />

                <Route path="/*" element={<div id="Home" className="tabcontent">
                    <h3>Home (Default)</h3>
                </div>} /> {/* Default route */}

                <Route path="/home" element={<div id="Home" className="tabcontent">
                    <h3>Home</h3>
                </div>} />
                <Route path="/about" element={<div id="About" className="tabcontent">
                    <h3>About</h3>
                </div>} />
            </Routes>
            
              <table id="data-table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                    </tr>
                </thead>
                <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item_name}</td>
              <td>{item.buy_price}</td>
              <td>{item.sell_price}</td>
            </tr>
          ))}
        </tbody>
                    </table>
                 </div>
                 
          );
        };
            
        

export default Items