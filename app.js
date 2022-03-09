const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the homepage bitchhhh");
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("wasssuppp");
});
