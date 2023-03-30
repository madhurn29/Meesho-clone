const express = require("express");
const { connection } = require("./config/db");
const app = express();
require("dotenv").config();

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
  }

  console.log(`server listening on ${process.env.PORT}`);
});
