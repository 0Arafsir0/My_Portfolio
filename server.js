const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const app = express();
require('dotenv').config();

const cors = require("cors");
const dbconfig = require('./config/dbconfig');
const portfolioRoute = require('./routes/portfolioRoute');

dbconfig.connectionToMongodb();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://https://myportfolio-gamma-bice-79.vercel.app//"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});