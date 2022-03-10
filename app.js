const express = require("express");
const app = express();


app.get("/", (req, res) => {
  
    res.send("welcome to the homepage bitchhhh");
  
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log("wasssuppp");
});

const { Pool } = require("pg");
const client = new Pool({
  host: "testdb.chzn6cnaazyl.eu-west-2.rds.amazonaws.com",
  user: "postgres",
  post: 5432,
  password: "Toothemoon69",
  database: "Test_db"
})
// const client = new Pool({
  
//   host: process.env.RDS_HOSTNAME,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database: process.env.RDS_DB_NAME
// });


  client.query("select * from solana where id='1'", (err, res) => {
    if (!err) {
      let queryresult = res.rows[0];
      console.log(queryresult);
      return queryresult;
    } else {
      console.log(err.message);
    }
    console.log("row added");
  });
