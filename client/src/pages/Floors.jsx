import React, { useState, useEffect } from "react";
import '../styles/floors.css';
import axios from "axios";

const Floors = () => {
  const [nons, setNons] = useState([]);
  const [s, setS] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/nons")
      .then((response) => {
        setNons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  useEffect(() => {
    axios.get("http://localhost:8800/s")
      .then((response) => {
        setS(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Floors</h1>
      <div style={{ textAlign: "center" }}>
        <b>
          This website was designed to be used by Hypixel Skyblock players for their
          dungeon runs in Floors 1-7 (Master Mode not implemented yet).
        </b>
      </div>
      <div className="table-container">
        <div className="table-column">
          <table id="home-table">
            <caption>Non-S</caption>
            <thead>
              <tr>
                <th>Floor/Chest</th>
                <th>Profit Chance</th>
                <th>Profit Per Run</th>
              </tr>
            </thead>
            <tbody>
              {nons.map((nons, index) => ( // Fix mapping variable name
                <tr key={index}>
                  <td>{nons.floor_chest}</td>
                  <td>{nons.profit_chance}</td>
                  <td>{nons.prof_per_run}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-column">
          <table id="floordiff-table">
            <caption>S+</caption>
            <thead>
              <tr>
                <th>Floor/Chest</th>
                <th>Profit Chance</th>
                <th>Profit Per Run</th>
              </tr>
            </thead>
            <tbody>
              {s.map((s, index) => ( // Fix mapping variable name
                <tr key={index}>
                  <td>{s.floor_chest}</td>
                  <td>{s.profit_chance}</td>
                  <td>{s.prof_per_run}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Floors;