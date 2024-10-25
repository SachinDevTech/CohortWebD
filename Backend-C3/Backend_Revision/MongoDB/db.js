// Import the Mongoose library:
const mongoose = require('mongoose');

//Import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Create a connectDB as follows:
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
