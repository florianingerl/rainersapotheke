const sqlite3db = require("sqlite3db.js");

sqlite3db.getAllUsers( (rows)=> {
    console.log("There are " + rows.length + " entries in the database table users!");
    rows.forEach((row) => {
      console.log("Vorname:" + row.vorname + " Nachname:" + row.nachname );
    });
  });