const mysql = require('mysql');

const keys = require("../config/keys");

const connection = mysql.createConnection({
                                              host: keys.dbhost,
                                              user: keys.dbuser,
                                              password: keys.dbpassword,
                                              database: keys.dbschema
                                          });

const connectDB = () => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Connected to the database');
    });
}

const insertDB = (table, row, callback) => {
    connection.query(`INSERT INTO ${table} SET ?`, row, (err,res) => {
        if (err) {
            console.log("Error in inserting the database" + err.message)
            callback(null);
        }
        callback(row);
    });

};

const findByColumn = (table, column, value, callback) => {
    connection.query(`select * from ${table} WHERE ${column} = ?`, value, (err, rows) => {
        if (err) {
            //console.log("Error in selecting from database " + err.message)
            callback(null, err);
            return;
        }
        callback(rows[0], null);
    });
};

module.exports = {connectDB, insertDB, findByColumn};
