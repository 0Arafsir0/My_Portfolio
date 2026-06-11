const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const dbconfig = require('./config/dbconfig');
const portfolioRoute = require('./routes/portfolioRoute');

dbconfig.connectionToMongodb();


const allowedOrigins = [
  "http://localhost:3000",
  "https://myportfolio-gamma-bice-79.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options(/.*/, cors());
app.use(express.json());
app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
