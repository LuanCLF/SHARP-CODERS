const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  console.log(req.body);
  await fs.writeFile("./arquivoPraReescrever", "bbbbbbbbbbbbbb");
  return res.json("chegou lindo");
});
app.listen(3000);
