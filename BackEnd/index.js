const express = require('express');
const app = express();
const { createPool } = require('mysql');
const cors = require('cors');

const db = createPool({
  host: 'localhost',

  user: 'root',
  password: 'jovin123',
  database: 'vehicleservice',
  connectionLimit: 10,
});
app.use(cors);
const sqlstatement = "INSERT INTO temp(name) VALUES('FEMI');";
db.query(sqlstatement, (err, result, fields) => {
  if (err) {
    return console.log(err);
  } else {
    return console.log(result);
  }
});

app.get('/', (req, res) => {
  console.log('here');
});

app.listen(3001, () => {
  console.log('Running on port 3001');
});
