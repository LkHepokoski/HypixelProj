// Import React, useEffect, useState from the "react" library
import React, { useEffect, useState } from "react";

// Import CSS file for styling 
import '../styles/items.css';

// Import the Axios library for making HTTP requests
import axios from "axios";

// Define a functional component named "Items"
const Items = () => {
  // Define a state variable "items" and its corresponding setter function
  const [items, setItems] = useState([]);

  // Use the useEffect hook to make an HTTP GET request 
  useEffect(() => {
    axios.get("http://localhost:8800/items") // backend URL
      .then((response) => {
        setItems(response.data); // Update the "items" state with the received data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Items</h1>
      <table id="data-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
          </tr> 
        </thead>
        <tbody>
          {items.map((item, index) => ( // Map over the "items" array and display data in rows
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

// Export the "Items" component as the default export of this module
export default Items;