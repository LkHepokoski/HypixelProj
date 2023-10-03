import React, { useState } from "react";
import '../styles/nons.css';


const NonS = () => {
      // Sample data for the table
  const initialItems = [
    {
      floorChest: "Floor 1",
      item: "Wither Skeleton Leggings",
      itemDropChance: "20%",
      costFromChest: "500000",
      marketValue: "700000",
      profitLoss: "200000",
    },
    {
      floorChest: "Floor 2",
      item: "Giant's Sword",
      itemDropChance: "3%",
      costFromChest: "1600000",
      marketValue: "20000000",
      profitLoss: "18400000",
    },
    {
      floorChest: "Floor 3",
      item: "Bank III",
      itemDropChance: "25%",
      costFromChest: "5000",
      marketValue: "2000",
      profitLoss: "-3000",
    },
    // Add more sample data as needed
  ];

  
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Non-S+ Runs</h1>
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.floorChest}</td>
              <td>{item.item}</td>
              <td>{item.itemDropChance}</td>
              <td>{item.costFromChest}</td>
              <td>{item.marketValue}</td>
              <td>{item.profitLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
    
    export default NonS