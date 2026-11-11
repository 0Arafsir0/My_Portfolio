const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dbconfig = require("./config/dbconfig");
const portfolioRoute = require("./routes/portfolioRoute");

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://myportfolio-gamma-bice-79.vercel.app",
  ...(process.env.CLIENT_ORIGINS || "").split(",").map((origin) => origin.trim()).filter(Boolean),
];

app.set("trust proxy", 1);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS."));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
}));
app.use(express.json({ limit: "1mb" }));
app.use("/api/portfolio", portfolioRoute);

async function startServer() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET must be configured with at least 32 characters.");
  }
  await dbconfig.connectionToMongodb();
  app.listen(port, () => console.log(`Server is running on port ${port}`));
}

startServer().catch((error) => {
  console.error("Application startup failed:", error.message);
  process.exit(1);
});
