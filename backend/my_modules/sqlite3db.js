const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else {
        console.log('Connected to the database.');
    }
});



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



var deleteUser = function(id, callback ){
    db.run("delete from users where id = " + id, [], (err) => {
        if(err){
            throw err;
        }
        getAllUsers(callback);
    });
};

module.exports = {
    getAllUsers: getAllUsers,
    deleteUser : deleteUser,
    getAllNorms: getAllNorms,
    getAllNormpunkteForNorm: getAllNormpunkteForNorm
};