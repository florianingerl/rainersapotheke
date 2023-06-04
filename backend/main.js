const sqlite3 = require('sqlite3').verbose();
const sum = require("./my_modules/testmodule.js");

var c = sum(5,6);

console.log("5+6=", c);

let db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

let sql = `SELECT * FROM users
           ORDER BY vorname`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);

  rows.forEach((row) => {
    console.log("Vorname:" + row.vorname + " Nachname:" + row.nachname );
  });
});




