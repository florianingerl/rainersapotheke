const sqlite3db = require("./my_modules/sqlite3db.js");

sqlite3db.getAllNormpunkteForNorm("GMP-Leitfaden Teil I", (rows)=> {
    console.log("There are " + rows.length + " entries in the database table users after one has been deleted!");
    rows.forEach((row) => {
      console.log("Kapitel" + row.kapitel + " Beschreibung:" + row.beschreibung );
    });
  });