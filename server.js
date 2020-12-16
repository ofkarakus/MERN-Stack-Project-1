// API Server

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000; 
const { connect_db } = require("./models/DB");
connect_db();
app.use(express.json());

// Route
const router = require("./routes/router");
app.use("/api", router); //  respond only "/api" endpoint

app.listen(port, () => {
  console.log(`I'm listening on port ${process.env.PORT}`);
});
