const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("Node Application");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
