import React, { useState } from "react";
import '../styles/floors.css';
import axios from "axios";

const Floors = () => {

        // Sample data for the tables
        const initialItems = [
          { floorChest: "Floor 1", profitChance: "20%", profitPerRun: "3000" },
          { floorChest: "Floor 2", profitChance: "50%", profitPerRun: "2000" },
          { floorChest: "Floor 3", profitChance: "55%", profitPerRun: "2500" },
          // Add more sample data as needed
        ];
      
        const initialItems2 = [
          { floorChest2: "Floor 1", profitChance2: "30%", profitPerRun2: "4000" },
          { floorChest2: "Floor 2", profitChance2: "10%", profitPerRun2: "2000" },
          { floorChest2: "Floor 3", profitChance2: "5%", profitPerRun2: "53000" },
        ]
      
        const [items, setItems] = useState(initialItems);
        const [items2, setItems2] = useState(initialItems2);
      
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
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.floorChest}</td>
                        <td>{item.profitChance}</td>
                        <td>{item.profitPerRun}</td>
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
                    {items2.map((item, index) => (
                      <tr key={index}>
                        <td>{item.floorChest2}</td>
                        <td>{item.profitChance2}</td>
                        <td>{item.profitPerRun2}</td>
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