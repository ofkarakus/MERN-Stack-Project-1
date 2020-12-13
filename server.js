// API Server

const express = require("express");
const app = express();
require("dotenv").config();
const {connect_db} = require("./models/db")
const port = process.env.PORT || 5001;

connect_db()

// Route
const router = require("./routes/router");
app.use("/api", router); //  respond only "/api" endpoint

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
