const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "messages",
});

db.connect((err) => {
  if (err) {
    console.log("Connecting Error");
    throw err;
  }
});

module.exports = db;
