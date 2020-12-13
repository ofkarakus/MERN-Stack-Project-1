// API Server

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// Route
const router = require('./routes/router')
app.use("/api", router)   //  respond only "/api" endpoint
 
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`)
})