// API Server

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path")
const { connect_db } = require("./models/DB");
connect_db();
app.use(express.json());

// Route
const router = require("./routes/router");
app.use("/api", router); //  respond only "/api" endpoint

// FOR PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});