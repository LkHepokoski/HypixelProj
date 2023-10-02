import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../styles/nons.css';


const NonS = () => {
    const [items, setItems] = useState([]);

    return (
        <div>

              <table id="data-table">
                <thead>
                    <tr>
                        <th>Floor/Chest</th>
                        <th>Item</th>
                        <th>Item Drop Chance</th>
                        <th>Cost From Chest</th>
                        <th>Market Value</th>
                        <th>Profit/Loss</th>
                    </tr>
                </thead>
                <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{}</td>
              <td>{item.buy_price}</td>
              <td>{item.sell_price}</td>
              <td>{item.item_name}</td>
              <td>{item.buy_price}</td>
              <td>{item.sell_price}</td>
              <td>{item.sell_price}</td>
            </tr>
          ))}
        </tbody>
                    </table>
                 </div>
    
    );
    }
    
    export default NonS