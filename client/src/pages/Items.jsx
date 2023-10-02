import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../styles/items.css';
import axios from "axios";

const Items = () => {
  const [items, setItems] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:8800/items") // Replace with your backend URL
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


        return (
          <div>
              <h1 style={{ textAlign: "center" }}>Items</h1>
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