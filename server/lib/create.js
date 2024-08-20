const db = require("./dataBase");

const create = (req, res) => {
  const { name, text } = req.body;
  const sql = `INSERT INTO plaintext(name, text) VALUES (?, ?)`;

  db.query(sql, [name, text], (err, result) => {
    if (err) {
      console.log("Err something !!");
      throw err;
    } else {
      res.send("success");
    }
  });
};

module.exports = create;
