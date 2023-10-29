// Import React, useState, and useEffect from the "react" library
import React, { useState, useEffect } from "react";

// Import CSS file for styling 
import '../styles/floors.css';

// Import the Axios library for making HTTP requests
import axios from "axios";

// Define a functional component named "Floors"
const Floors = () => {
  // Define state variables "nons" and "s" and their corresponding setter functions
  const [nons, setNonS] = useState([]);
  const [s, setS] = useState([]);

  // Use the useEffect hook to make an HTTP GET request 
  useEffect(() => {
    axios.get("http://localhost:8800/nons_chance")
      .then((response) => {
        setNonS(response.data); // Update the "nons" state with the received data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  // Another useEffect for a separate HTTP GET request
  useEffect(() => {
    axios.get("http://localhost:8800/s_chance")
      .then((response) => {
        setS(response.data); // Update the "s" state with the received data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Floors</h1> 
      <div style={{ textAlign: "center", color: "white" }}>
        <b>
          This website was designed to be used by Hypixel Skyblock players for their
          dungeon runs in Floors 1-7 (Master Mode not implemented yet).
        </b> 
      </div>
      <div className="table-container">
        <div className="tablenons-column">
          <table id="floordiffs-table">
            <caption>Non-S</caption> 
            <thead>
              <tr>
                <th>Floor/Chest</th>
                <th>Profit Chance</th>
                <th>Profit Per Run</th>
              </tr> 
            </thead>
            <tbody>
              {nons.map((non, index) => ( // Map over the "nons" array and display data in rows
                <tr key={index}>
                  <td>{non.floor_chest}</td>
                  <td>{non.profit_chance}</td>
                  <td>{non.prof_per_run}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-column">
          <table id="floordiffnons-table"> 
            <caption>S+</caption> 
            <thead>
              <tr>
                <th>Floor/Chest</th>
                <th>Profit Chance</th>
                <th>Profit Per Run</th>
              </tr> 
            </thead>
            <tbody>
              {s.map((sPlus, index) => ( // Map over the "s" array and display data in rows
                <tr key={index}>
                  <td>{sPlus.floor_chest}</td>
                  <td>{sPlus.profit_chance}</td>
                  <td>{sPlus.prof_per_run}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Export the "Floors" component as the default export of this module
export default Floors;