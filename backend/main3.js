const sqlite3db = require("sqlite3db.js");

sqlite3db.deleteUser(4, (rows)=> {
    console.log("There are " + rows.length + " entries in the database table users after one has been deleted!");
    rows.forEach((row) => {
      console.log("Vorname:" + row.vorname + " Nachname:" + row.nachname );
    });
  });