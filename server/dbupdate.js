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



// Items Table Update Function
const updateDataIntoItems = (data) => {
  const updateSql = 'UPDATE items SET `buy_price` = ?, `sell_price` = ? WHERE `item_name` = ?';

  data.forEach((rowData) => {
    const item_name = rowData.hasOwnProperty('Item') ? rowData['Item'].trim() : '';
    const buy_price = parseFloat(rowData['Buy Price'] || 0).toFixed(2); // Round to two decimal places
    const sell_price = parseFloat(rowData['Sell Price'] || 0).toFixed(2); // Round to two decimal places
    console.log('Updating data:', { item_name, buy_price, sell_price });

    connection.query(updateSql, [buy_price, sell_price, item_name], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};


// S_Chance Table Update Function
const updateDataIntoSChance = (data) => {
  const updateSql = 'UPDATE S_Chance SET `profit_chance` = ?, `prof_per_run` = ? WHERE `floor_chest` = ?';

  data.forEach((rowData) => {
    const floor_chest = rowData['Floor/Chest '].trim();
    const profit_chance = parseFloat(rowData['Profit Chance '] || 0).toFixed(2);
    const prof_per_run = parseFloat(rowData['PPR '] || 0).toFixed(2);

    console.log('Updating data:', { floor_chest, profit_chance, prof_per_run });

    connection.query(updateSql, [profit_chance, prof_per_run, floor_chest], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};


// NonS_Chance Table Update Function
const updateDataIntoNonSChance = (data) => {
  const updateSql = 'UPDATE NonS_Chance SET `profit_chance` = ?, `prof_per_run` = ? WHERE `floor_chest` = ?';

  data.forEach((rowData) => {
    const floor_chest = rowData['Floor/Chest '].trim();
    const profit_chance = parseFloat(rowData['Profit Chance '] || 0).toFixed(2);
    const prof_per_run = parseFloat(rowData['PPR '] || 0).toFixed(2);

    console.log('Updating data:', { floor_chest, profit_chance, prof_per_run });

    connection.query(updateSql, [profit_chance, prof_per_run, floor_chest], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};


// NonS Table Update Function
const updateDataIntoFloorNonS = (data) => {
  const updateSql = 'UPDATE NonS SET `floor_item` = ?, `item_drop_chance` = ?, `item_cost` = ?, `market_val` = ?, `profit` = ? WHERE `floor_chest` = ?';

  data.forEach((rowData) => {
    const floor_chest = rowData['Floor/Chest '].trim();
    const floor_item = rowData['Drop '].trim();
    const item_drop_chance = parseFloat(rowData['Odds in % (not S+) ']).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest ']).toFixed(2);
    const market_val = parseFloat(rowData['Market Value ']).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss ']).toFixed(2);

    console.log('Updating data:', { floor_chest, floor_item, item_drop_chance, item_cost, market_val, profit });

    connection.query(updateSql, [floor_item, item_drop_chance, item_cost, market_val, profit, floor_chest], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};


// Floors Table Update Function
const updateDataIntoFloorS = (data) => {
  const updateSql = 'UPDATE S SET `floor_item` = ?, `item_drop_chance` = ?, `item_cost` = ?, `market_val` = ?, `profit` = ? WHERE `floor_chest` = ?';

  data.forEach((rowData) => {
    const floor_chest = rowData['Floor/Chest '].trim();
    const floor_item = rowData['Drop '].trim();
    const item_drop_chance = parseFloat(rowData['Odds in % (S+) ']).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest ']).toFixed(2);
    const market_val = parseFloat(rowData['Market Value ']).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss ']).toFixed(2);

    console.log('Updating data:', { floor_chest, floor_item, item_drop_chance, item_cost, market_val, profit });

    connection.query(updateSql, [floor_item, item_drop_chance, item_cost, market_val, profit, floor_chest], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};

// Floor Diff Table Update Function
const updateDataIntoFloorDiff = (data) => {
  const updateSql = 'UPDATE floordiff SET `floor_item` = ?, `item_drop_chance` = ?, `item_cost` = ?, `market_val` = ?, `profit` = ? WHERE `floor_chest` = ?';

  data.forEach((rowData) => {
    const floor_chest = rowData.hasOwnProperty('Floor/Chest ') ? rowData['Floor/Chest '].trim() : '';
    const floor_item = rowData.hasOwnProperty('Drop ') ? rowData['Drop '].trim() : '';
    const item_drop_chance = parseFloat(rowData['Odds in % (S+) '] || 0).toFixed(2);
    const item_cost = parseFloat(rowData['Cost from Chest '] || 0).toFixed(2);
    const market_val = parseFloat(rowData['Market Value '] || 0).toFixed(2);
    const profit = parseFloat(rowData['Profit/Loss '] || 0).toFixed(2);

    console.log('Updating data:', { floor_chest, floor_item, item_drop_chance, item_cost, market_val, profit });

    connection.query(updateSql, [floor_item, item_drop_chance, item_cost, market_val, profit, floor_chest], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        console.log('Data updated successfully:', results);
      }
    });
  });
};





// Function to update items table data periodically
const updateItemsData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Bazaar Shit',
    query: 'SELECT A, B, C WHERE A IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoItems(data.slice(0)); // Specify the table update function here
    },
  });
};


// Function to update items table data periodically
const updateSChanceData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Profit/Floor',
    query: 'SELECT I, J, K WHERE I IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoSChance(data.slice(0)); // Specify the table update function here
    },
  });
};


// Function to update items table data periodically
const updateNonSChanceData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Profit/Floor',
    query: 'SELECT A, B, C WHERE A IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoNonSChance(data.slice(0)); // Specify the table update function here
    },
  });
};


// Function to update items table data periodically
const updateFloorNonSData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Non-S+',
    query: 'SELECT C, D, E, F WHERE A IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoFloorNonS(data.slice(0)); // Specify the table update function here
    },
  });
};


// Function to update items table data periodically
const updateFloorSData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'S+',
    query: 'SELECT B, C, D, E, F WHERE A IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoFloorS(data.slice(0)); // Specify the table update function here
    },
  });
};


// Function to update items table data periodically
const updateFloorDiffData = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'S+',
    query: 'SELECT B, C, D, E, F WHERE G IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoFloorDiff(data.slice(0)); // Specify the table update function here
    },
  });
};


const updateInterval = 6.5 * 60 * 1000; // 6.5 minutes
setInterval(updateItemsData, updateInterval);
setInterval(updateSChanceData, updateInterval);
setInterval(updateNonSChanceData, updateInterval);
setInterval(updateFloorNonSData, updateInterval);
setInterval(updateFloorSData, updateInterval);
setInterval(updateFloorDiffData, updateInterval);

