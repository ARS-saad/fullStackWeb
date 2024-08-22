const express = require("express");
const create = require("./lib/create");
const read = require("./lib/read");
const update = require("./lib/update");
const deleted = require("./lib/delete");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.route("/").post(create).get(read).put(update).delete(deleted);

app.listen(3000, () => {
  console.log("server is running");
});
