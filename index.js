const express = require("express");
const app = express();

//app.get(route,callback)
app.get("/", (req, res) => {
  res.send("My first Node API!");
});

const port = 8000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
