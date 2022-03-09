const express = require("express");
const app = express();
import * as pg from "pg";
const { Pool } = pg.default;
const pool = new Pool({
  connectionlimit: 50,
  host: "testdb.chzn6cnaazyl.eu-west-2.rds.amazonaws.com",
  user: "postgres",
  password: "Toothemoon69",
  database: "Test_db",
});

app.get("/", (req, res) => {
  res.send("welcome to the homepage bitchhhh");
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("wasssuppp");
});

pool.query("select * from public.solana2 where id=1", (err, res) => {
  if (!err) {
    queryresult = result.rows[0][data];
    return queryresult;
  } else {
    console.log(err.message);
  }
  console.log("row added");
});
