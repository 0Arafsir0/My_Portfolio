const mongoose = require("mongoose");

async function connectionToMongodb() {
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) throw new Error("MONGO_URL is not defined");

  console.log("Attempting to connect to MongoDB...");
  await mongoose.connect(mongoUrl, { serverSelectionTimeoutMS: 10000 });
  console.log("MongoDB connection successful");
}

module.exports = { connectionToMongodb };
