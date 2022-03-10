const express = require("express");
const app = express();


app.get("/", (req, res) => {
  
    res.send("welcome to the homepage bitchhhh", queryresult);
  
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log("wasssuppp");
});

const { Pool } = require("pg");
const pool = new Pool({
  
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME
});


  pool.query("select * from public.solana2 where id='1'", (err, res) => {
    if (!err) {
      let queryresult = res.rows[0];
      console.log(queryresult);
      return queryresult;
    } else {
      console.log(err.message);
    }
    console.log("row added");
  });
