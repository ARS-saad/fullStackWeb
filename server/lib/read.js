const db = require("./dataBase");

const read = (req, res) => {
  const sql = `SELECT * FROM plaintext`;

  db.query(sql, [], (err, result) => {
    if (err) {
      console.log("Err something !!");
      throw err;
    } else {
      res.send(result);
    }
  });
};

module.exports = read;
