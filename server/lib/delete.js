const db = require("./dataBase");

const deleted = (req, res) => {
  const { id } = req.body;
  sql = `DELETE FROM plaintext WHERE id=?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Err something !!");
      throw err;
    } else {
      res.send("success");
    }
  });
};

module.exports = deleted;
