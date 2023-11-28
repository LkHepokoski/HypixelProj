// Import React, useState, and useEffect from the "react" library
import React, { useState, useEffect } from "react";

// Import CSS file for styling 
import '../styles/s.css';

// Import the Axios library for making HTTP requests
import axios from "axios";

// Define a functional component named "S"
const S = () => {
  // Define a state variable "floors" and its corresponding setter function
  const [floors, setFloors] = useState([]);

  // Use the useEffect hook to make an HTTP GET request 
  useEffect(() => {
    axios.get("http://localhost:8800/s")
      .then((response) => {
        setFloors(response.data); // Update the "floors" state with the received data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  
  // This is the JSX (JavaScript XML) code that represents the component's structure
  return (
    <div className="ssection-header">
      <h1>S+ Runs</h1> 
      <table id="s-table">
        <thead>
          <tr>
            <th>Floor/Chest</th>
            <th>Item</th>
            <th style={{ textAlign: "center" }}>Item Drop Chance</th> {/* Centered header */}
            <th style={{ textAlign: "center" }}>Cost From Chest</th> {/* Centered header */}
            <th style={{ textAlign: "center" }}>Market Value</th> {/* Centered header */}
            <th style={{ textAlign: "center" }}>Profit/Loss</th> {/* Centered header */}
          </tr> 
        </thead>
        <tbody>
          {floors.map((floor, index) => (
            <tr key={index}>
              <td>{floor.floor_chest}</td>
              <td>{floor.floor_item}</td>
              <td>{floor.item_drop_chance}</td>
              <td>{floor.item_cost}</td>
              <td>{floor.market_val}</td>
              <td>{floor.profit}</td>
            </tr> // Map over the "floors" array and display data in rows
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the "S" component as the default export of this module
export default S;