const express = require("express");
const app = express();


app.get("/", (req, res) => {
  
    res.send("welcome to the homepage bitchhhh", queryresult);
  
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log("wasssuppp");
});

// const { Pool } = require("pg");
// const pool = new Pool({
//   connectionlimit: 50,
//   host: "testdb.chzn6cnaazyl.eu-west-2.rds.amazonaws.com",
//   user: "postgres",
//   password: "Toothemoon69",
//   database: "Test_db",
// });

// async () => {
//   pool.query("select * from public.solana2 where id=1", (err, res) => {
//     if (!err) {
//       let queryresult = res.rows[0];
//       console.log(queryresult);
//       return queryresult;
//     } else {
//       console.log(err.message);
//     }
//     console.log("row added");
//   });