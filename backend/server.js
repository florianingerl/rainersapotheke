const express = require('express');
const sqlite3db = require("sqlite3db.js");
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Add headers before the routes are defined
app.use( (req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
    sqlite3db.getAllUsers( (rows) => {
        res.json(rows);
    });
});

app.get('/deleteUser/:id', (req, res) => {
    
  // Retrieve the tag from our URL path
  var id = req.params.id;
  sqlite3db.deleteUser(id, (rows) => {
    res.json(rows);
  });
 
});

app.get('/deleteUser2/', (req, res) => {
    let id = req.query.id;
    sqlite3db.deleteUser(id, (rows) => {
      res.json(rows);
    });
} ); 



app.listen(3000, () => console.log('Example app is listening on port 3000.'));
