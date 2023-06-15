const sqlite3db = require("./my_modules/sqlite3db.js");

let norm = {
    id: "TestNorm_ID_blabla",
    beschreibung: "Dies ist eine Testnorm"
};

sqlite3db.insertNewNorm( norm , (rows)=> {
    console.log("There are " + rows.length + " entries in the database table norms after one row has been inserted!");
    rows.forEach((row) => {
      console.log("ID" + row.id + " Beschreibung:" + row.beschreibung );
    });
  });
