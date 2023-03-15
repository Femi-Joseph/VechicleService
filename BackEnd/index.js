const express = require('express');
const app = express();
app.listen(3001, () => {
  console.log('Running on port 3001');
});
app.get('/', (req, res) => {
  res.send('Hellloo');
  console.log('here');
});

app.use(express.json());
const { createPool, createConnection } = require('mysql');
const cors = require('cors');
app.use(cors());

/*const db = createPool({
  host: 'localhost',

  user: 'root',
  password: 'jovin123',
  database: 'vehicleservice',
  connectionLimit: 10,
});

const sqlstatement = "INSERT INTO temp(name) VALUES('FEMI');";
console.log('after first table inserted temp file');
db.query(sqlstatement, (err, result, fields) => {
  if (err) {
    return console.log(err);
  } else {
    return console.log('Result=......', result);
  }
});*/
const db = createConnection({
  host: 'localhost',

  user: 'root',
  password: 'jovin123',
  database: 'vehicleservice',
});

app.post('/signup', (req, res) => {
  console.log('I am in signup');
  const name = req.body.name;
  const dob = req.body.dob;
  const email = req.body.email;
  const address = req.body.address;
  const photo = req.body.photo;
  const password = req.body.password;
  db.query(
    'INSERT INTO usersignup (name,dob,email,address,photo,password)VALUES(?,?,?,?,?,?)',
    [name, dob, email, address, photo, password],
    (error, result) => {
      console.log(error);
    }
  );
});
app.post('/login', (req, res) => {
  console.log('now in login');
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    'SELECT * FROM usersignup WHERE email=? AND password=? ',
    [email, password],
    (error, result) => {
      if (error) {
        res.send({ error: error });
      } else {
        if (result) {
          res.send(result);
          //console.log(result)
          //res.redirect('/dashboard');
        } else {
          res.send({ message: 'Wrong UserName / Password combination' });
        }
      }
    }
  );
});
