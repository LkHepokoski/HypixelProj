import express from 'express';
import mysql from 'mysql2';
import cors from "cors";

const app = express();

// db config
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hypixeldungeon'
})

app.use(express.json())
app.use(cors())

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

// main page message
app.get("/", (req, res) => {
    res.json("hello this is backend")
})


// gets query from db and returns values
app.get("/home", (req, res) => {
    const query = "SELECT * FROM nons"
    db.query(query,(err,data) => {
        if (err) return res.json(err)
        return res.json(data) 
    })
})

// Define a route to fetch data from the 'items' table
app.get('/items', (req, res) => {
    const sql = 'SELECT * FROM items'; // SQL query to select data from the 'items' table
  
    // Log a debug message to indicate that the route is being accessed
    console.log('Fetching data from the "items" table...');
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Log a debug message to indicate that data has been retrieved successfully
        console.log('Data fetched successfully from the "items" table.');
  
        res.json(results); // Send the data as JSON response
      }
    });
  });


  // Define a route to fetch data from the 'items' table
  app.get('/floors', (req, res) => {
    const sql = 'SELECT * FROM floors'; // SQL query to select data from the 'items' table
  
    // Log a debug message to indicate that the route is being accessed
    console.log('Fetching data from the "floors" table...');
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Log a debug message to indicate that data has been retrieved successfully
        console.log('Data fetched successfully from the "floors" table.');
  
        res.json(results); // Send the data as JSON response
      }
    });
  });
  

    // Define a route to fetch data from the 'items' table
  app.get('/floordiff', (req, res) => {
    const sql = 'SELECT * FROM s'; // SQL query to select data from the 'items' table
  
    // Log a debug message to indicate that the route is being accessed
    console.log('Fetching data from the "floor diff" table...');
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Log a debug message to indicate that data has been retrieved successfully
        console.log('Data fetched successfully from the "floor diff" table.');
  
        res.json(results); // Send the data as JSON response
      }
    });
  });



  // Define a route to fetch data from the 'items' table
  app.get('/s', (req, res) => {
    const sql = 'SELECT * FROM s'; // SQL query to select data from the 'items' table
  
    // Log a debug message to indicate that the route is being accessed
    console.log('Fetching data from the "items" table...');
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Log a debug message to indicate that data has been retrieved successfully
        console.log('Data fetched successfully from the "s" table.');
  
        res.json(results); // Send the data as JSON response
      }
    });
  });
  

  // Define a route to fetch data from the 'items' table
app.get('/nons', (req, res) => {
  const sql = 'SELECT * FROM nons'; // SQL query to select data from the 'items' table

  // Log a debug message to indicate that the route is being accessed
  console.log('Fetching data from the "nons" table...');

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Log a debug message to indicate that data has been retrieved successfully
      console.log('Data fetched successfully from the "nons" table.');

      res.json(results); // Send the data as JSON response
    }
  });
});

// listening on port
app.listen(8800, () => {
    console.log("listening on 8800")
})

export default app;