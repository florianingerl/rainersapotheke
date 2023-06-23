const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else {
        console.log('Connected to the database.');
    }
});

var insertNewNorm = function( norm ,callback ){
  db.run(`INSERT INTO norms(id, beschreibung) VALUES(?,?)`, [norm.id, norm.beschreibung], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A new norm was successfully inserted`);
    getAllNorms(callback);
  });
};

var insertNewAuditReport = function( ar ,callback ){
  const d = new Date();
  db.run(`INSERT INTO auditreports (name, author, creation_date) VALUES(?,?,?)`, [ar.name, ar.author, d.toString() ], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    db.get("select max( id ) as id from auditreports", [], (err, row) => {
      if (err) {
        return console.log(err.message);
      }
      callback(row); 
    });
  });
};


var getAllUsers = function( callback ){
    db.all("select * from users", [], (err, rows) => {
        if (err) {
          throw err;
        }
        callback(rows)
      });
};

var getAllNorms = function( callback ){
    db.all("select * from norms", [], (err, rows) => {
        if (err) {
          throw err;
        }
        callback(rows)
      });
};

let getAllNormpunkteForNorm = function( norm_id, callback ){
    db.all("select * from normpunkte where norm_id='" + norm_id + "'", [], (err, rows) => {
        if (err) {
          throw err;
        }
        callback(rows)
      });
};


var getAllAuditReports = function( callback ){
    db.all("select * from auditreports", [], (err, rows) => {
        if (err) {
          throw err;
        }
        callback(rows)
      });
};

var deleteUser = function(id, callback ){
    db.run("delete from users where id = " + id, [], (err) => {
        if(err){
            throw err;
        }
        getAllUsers(callback);
    });
};

module.exports = {
    getAllUsers,
    deleteUser,
    getAllNorms,
    getAllNormpunkteForNorm,
    insertNewNorm,
    insertNewAuditReport,
    getAllAuditReports 

};