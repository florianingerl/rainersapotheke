const sqlite3db = require("./my_modules/sqlite3db.js");

sqlite3db.getAllAuditReports((rows)=> {
    console.log("There are " + rows.length + " entries in the database table auditreports!");
    rows.forEach((row) => {
      console.log("ID" + row.id + " Author" + row.author + " Name" + row.name + "Date" + row.creation_date);
    });
  });