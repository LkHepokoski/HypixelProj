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



// Function to update items table data periodically
const updateItemsDataPeriodically = () => {
  getSheetData({
    sheetID: '1hoRe8GxnnNuZj6TFbxPvTzitEPY9zOizYR_U5L9dHi8',
    sheetName: 'Bazaar Shit',
    query: 'SELECT A, B, C WHERE A IS NOT NULL', // Modify this query according to your needs
    callback: (data) => {
      updateDataIntoItems(data.slice(0)); // Specify the table update function here
    },
  });
};

const updateInterval = 6.5 * 60 * 1000; // 6.5 minutes
setInterval(updateItemsDataPeriodically, updateInterval);
