import mysql from 'mysql2'; // make sure to install mysql or mysql2
import fetch from 'node-fetch'; // Make sure to install node-fetch using 'npm install node-fetch'

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hypixeldungeon',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define getSheetData function here
const getSheetData = ({ sheetID, sheetName, query, callback }) => {
  const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  const url = `${base}&sheet=${encodeURIComponent(
    sheetName
  )}&tq=${encodeURIComponent(query)}`;

  //console.log('Fetching data from:', url); // Debug statement

  fetch(url)
    .then((res) => res.text())
    .then((response) => {
    //  console.log('Received response from Google Sheets API:'); // Debug statement
    //  console.log(response); // Debug statement

      callback(responseToObjects(response));
    })
    .catch((error) => {
      console.error('Error fetching data:', error); // Debug statement
    });

};

function responseToObjects(res) {
// Debug statement
 // console.log('Parsing Google Sheets response:');
 // console.log(res);

  // credit to Laurence Svekis https://www.udemy.com/course/sheet-data-ajax/
  const jsData = JSON.parse(res.substring(47).slice(0, -2));
  let data = [];
  const columns = jsData.table.cols;
  const rows = jsData.table.rows;
  let rowObject;
  let cellData;
  let propName;
  for (let r = 0, rowMax = rows.length; r < rowMax; r++) {
    rowObject = {};
    for (let c = 0, colMax = columns.length; c < colMax; c++) {
      cellData = rows[r]['c'][c];
      propName = columns[c].label;
      if (cellData === null) {
        rowObject[propName] = '';
      } else if (
        typeof cellData['v'] == 'string' &&
        cellData['v'].startsWith('Date')
      ) {
        rowObject[propName] = new Date(cellData['f']);
      } else {
        rowObject[propName] = cellData['v'];
      }
    }
    data.push(rowObject);
  }
  return data;
}


// S Table Insert Function
const insertDataIntoSChance = (data) => {
  const sql = 'INSERT INTO S_Chance (`floor_chest`, `profit_chance`, `prof_per_run`) VALUES (?, ?, ?)';

  data.forEach((rowData) => {
    // Extract data using the correct column names with spaces
    const floor_chest = rowData['S+ Floor/Chest '].trim();
    const profit_chance = parseFloat(rowData['Profit Chance ']).toFixed(2); // Round to two decimal places
    const prof_per_run = parseFloat(rowData['PPR ']).toFixed(2); // Round to two decimal places

    console.log('Inserting data:', { floor_chest, profit_chance, prof_per_run });

    connection.query(sql, [floor_chest, profit_chance, prof_per_run], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};


// NonS Table Insert Function
const insertDataIntoNonSChance = (data) => {
  const sql = 'INSERT INTO NonS_Chance (`floor_chest`, `profit_chance`, `prof_per_run`) VALUES (?, ?, ?)';

  data.forEach((rowData) => {
    // Extract data using the correct column names with spaces
    const floor_chest = rowData['Non S+ Floor/Chest '].trim();
    const profit_chance = parseFloat(rowData['Profit Chance ']).toFixed(2); // Round to two decimal places
    const prof_per_run = parseFloat(rowData['PPR ']).toFixed(2); // Round to two decimal places

    console.log('Inserting data:', { floor_chest, profit_chance, prof_per_run });

    connection.query(sql, [floor_chest, profit_chance, prof_per_run], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};

// Items Table Insert Function
const insertDataIntoItems = (data) => {
  const sql = 'INSERT INTO items (`item_name`, `buy_price`, `sell_price`) VALUES (?, ?, ?)';

  data.forEach((rowData) => {
    // Check if the 'Item' property exists before accessing it
    const item_name = rowData.hasOwnProperty('Item') ? rowData['Item'].trim() : '';
    const buy_price = parseFloat(rowData['Buy Price'] || 0).toFixed(2); // Round to two decimal places
    const sell_price = parseFloat(rowData['Sell Price'] || 0).toFixed(2); // Round to two decimal places

    connection.query(sql, [item_name, buy_price, sell_price], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};

// Floors Table Insert Function
const insertDataIntoFloorNonS = (data) => {
  const sql = 'INSERT INTO NonS (`floor_chest`, `floor_item`,`item_drop_chance`, `item_cost`,`market_val`, `profit`) VALUES (?, ?, ?, ?, ?, ?)';

  data.forEach((rowData) => {
    // Extract data using the correct column names with spaces
    const floor_chest = rowData['Floor/Chest '].trim();
    const floor_item = rowData['Drop '].trim();
    const item_drop_chance = parseFloat(rowData['Odds in % (not S+) ']).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest ']).toFixed(2);
    const market_val = parseFloat(rowData['Market Value ']).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss ']).toFixed(2);

    connection.query(sql, [floor_chest,floor_item, item_drop_chance, item_cost, market_val, profit], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};

// Floor Diff Table Insert Function
const insertDataIntoFloorDiff = (data) => {
  const sql = 'INSERT INTO floordiff (`floor_chest`, `floor_item`,`item_drop_chance`, `item_cost`,`market_val`, `profit`) VALUES (?, ?, ?, ?, ?, ?)';

  data.forEach((rowData) => {
    // Check if the properties exist before accessing them
    const floor_chest = rowData.hasOwnProperty('Floor/Chest ') ? rowData['Floor/Chest '].trim() : '';
    const floor_item = rowData.hasOwnProperty('Drop ') ? rowData['Drop '].trim() : '';
    const item_drop_chance = parseFloat(rowData['Odds in % (S+) '] || 0).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest '] || 0).toFixed(2);
    const market_val = parseFloat(rowData['Market Value '] || 0).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss '] || 0).toFixed(2);

    connection.query(sql, [floor_chest,floor_item, item_drop_chance, item_cost, market_val, profit], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};


// Floors Table Insert Function
const insertDataIntoFloorS = (data) => {
  const sql = 'INSERT INTO S (`floor_chest`, `floor_item`,`item_drop_chance`, `item_cost`,`market_val`, `profit`) VALUES (?, ?, ?, ?, ?, ?)';

  data.forEach((rowData) => {
    // Extract data using the correct column names with spaces
    const floor_chest = rowData['Floor/Chest '].trim();
    const floor_item = rowData['Drop '].trim();
    const item_drop_chance = parseFloat(rowData['Odds in % (S+) ']).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest ']).toFixed(2);
    const market_val = parseFloat(rowData['Market Value ']).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss ']).toFixed(2);

    connection.query(sql, [floor_chest,floor_item, item_drop_chance, item_cost, market_val, profit], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully:', results);
      }
    });
  });
};

  // Fetch data for S_Chance table and insert it into the database
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Profit/Floor',
    query: 'SELECT I, J, K WHERE I IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      insertDataIntoSChance(data.slice(0)); // Specify the table insertion function here
    },
  });

  // Fetch data for NonS_Chance Table and insert it into the database
getSheetData({
  sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
  sheetName: 'Profit/Floor',
  query: 'SELECT A, B, C WHERE A IS NOT NULL', // Modify this query according to your needs
  callback: (data) => {
    insertDataIntoNonSChance(data.slice(0)); // Specify the table insertion function here
  },
});


// Fetch data for Items table and insert it into the database
getSheetData({
  sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
  sheetName: 'Bazaar Shit',
  query: 'SELECT A, B, C WHERE A IS NOT NULL', // Modify this query according to your needs
  callback: (data) => {
    insertDataIntoItems(data.slice(0)); // Specify the table insertion function here
    },
  });


// Fetch data for Non-S+ table and insert it into the database
getSheetData({
  sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
  sheetName: 'Non-S+',
  query: 'SELECT A, B, C, D, E, F WHERE A IS NOT NULL', // Modify this query according to your needs
  callback: (data) => {
    insertDataIntoFloorNonS(data.slice(0)); // Specify the table insertion function here
    },
  });


  // Fetch data for S+ table and insert it into the database
getSheetData({
  sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
  sheetName: 'S+',
  query: 'SELECT A, B, C, D, E, F WHERE A IS NOT NULL', // Modify this query according to your needs
  callback: (data) => {
    insertDataIntoFloorS(data.slice(0)); // Specify the table insertion function here
    },
  });



// Fetch data for Floor Diff table and insert it into the database
getSheetData({
  sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
  sheetName: 'S+',
  query: 'SELECT A, B, C, D, E, F WHERE G IS NOT NULL', // Modify this query according to your needs
  callback: (data) => {
    insertDataIntoFloorDiff(data.slice(0));
    },
  });
