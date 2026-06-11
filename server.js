const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const dbconfig = require('./config/dbconfig');
const portfolioRoute = require('./routes/portfolioRoute');

dbconfig.connectionToMongodb();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://myportfolio-12s57a44o-arafsir-s-projects.vercel.app",
      "https://myportfolio-26gw.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(cors(...));  
app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
