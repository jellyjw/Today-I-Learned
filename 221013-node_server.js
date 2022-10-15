const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("node js server start");
});

app.listen(8000, () => {
  console.log("Start Server 8000");
});
