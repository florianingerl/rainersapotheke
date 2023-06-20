const sqlite3db = require("./my_modules/sqlite3db.js");

let newAuditReport = {
    name: "Test_Name",
    author: "Test_author"
};

sqlite3db.insertNewAuditReport( newAuditReport, (new_id)=> {
    console.log("A new audit report with id " + new_id + " was created!");
    console.log(new_id);
  });
