import React, { useState } from "react";
import '../styles/s.css';


const S = () => {
      // Sample data for the table
      const initialItems = [
        {
          floorChest: "Floor 6 Gold",
          item: "Legion I",
          itemDropChance: "10%",
          costFromChest: "500000",
          marketValue: "700000",
          profitLoss: "200000",
        },
        {
          floorChest: "Floor 7 Bedrock",
          item: "Necron's Handle",
          itemDropChance: "0.1%",
          costFromChest: "1600000",
          marketValue: "200000000",
          profitLoss: "184000000",
        },
        {
          floorChest: "Floor 7 ",
          item: "Maxor Leggings",
          itemDropChance: "5%",
          costFromChest: "500000",
          marketValue: "200000",
          profitLoss: "-300000",
        },
        // Add more sample data as needed
      ];
    
      
      const [items, setItems] = useState(initialItems);
    
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>S+ Runs</h1>
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
        
    
    export default S