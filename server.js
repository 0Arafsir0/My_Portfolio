const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express=require('express');
const app=express();
require('dotenv').config();
const dbconfig=require('./config/dbconfig');

const portfolioRoute=require('./routes/portfolioRoute');



dbconfig.connectionToMongodb();

app.use(express.json());

app.use('/api/portfolio',portfolioRoute);


const port= process.env.PORT || 5000;
const  path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
