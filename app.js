const express = require("express");
const app = express();
const { Pool } = require("pg");
const pool = new Pool({
  connectionlimit: 50,
  host: "testdb.chzn6cnaazyl.eu-west-2.rds.amazonaws.com",
  user: "postgres",
  password: "Toothemoon69",
  database: "Test_db",
});
async () => {
  app.get("/", (req, res) => {
    pool.query("select * from public.solana2 where id=1", (err, res) => {
      if (!err) {
        queryresult = res.rows[0];
        console.log(queryresult);
      } else {
        console.log(err.message);
      }
      console.log("row added");
    });
    res.send("welcome to the homepage bitchhhh", await queryresult);
  });
};

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("wasssuppp");
});
