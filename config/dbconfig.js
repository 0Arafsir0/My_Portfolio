const mongoose = require("mongoose");

async function connectionToMongodb() {
  try {
    console.log("Attempting to connect to MongoDB...");

    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined");
    }

    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection unsuccessful");
    console.error(err instanceof Error ? err.message : String(err));
  }
}

module.exports = { connectionToMongodb };