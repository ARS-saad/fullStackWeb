const db = require("./dataBase");

const update = (req, res) => {
  const { id, name, text } = req.body;
  const sql = `UPDATE plaintext SET name=?,text=? WHERE id=?`;

  db.query(sql, [name, text, id], (err, result) => {
    if (err) {
      console.log("Err something !!");
      throw err;
    } else {
      res.send("success");
    }
  });
};

module.exports = update;
