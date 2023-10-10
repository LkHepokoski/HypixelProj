import React, { useState, useEffect } from "react";
import '../styles/nons.css';
import axios from "axios";

const NonS = () => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/floors")
      .then((response) => {
        setFloors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Non-S+ Runs</h1>
      <div className="table-container"> {/* Add the container */}
        <table id="nons-table">
          <thead>
            <tr>
              <th>Floor/Chest</th>
              <th>Item</th>
              <th style={{ textAlign: "center" }}>Item Drop Chance</th> {/* Centered */}
              <th style={{ textAlign: "center" }}>Cost From Chest</th> {/* Centered */}
              <th style={{ textAlign: "center" }}>Market Value</th> {/* Centered */}
              <th style={{ textAlign: "center" }}>Profit/Loss</th> {/* Centered */}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NonS;