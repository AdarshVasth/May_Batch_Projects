const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("MongoDB Connected..");
  } catch (error) {
    console.log("Error connecting to MongoDB");
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
