// Connect DB

const mongoose = require("mongoose");

exports.connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to DB.");
  } catch (error) {
    console.log("An error occured.", error);
  }
};
