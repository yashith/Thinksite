const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')
const users=require('./Routes/UserRoute')
const app= express()
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


mongoose.connect(process.env.DB_Connection,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{if(err){console.log(err)}else{console.log("connected")}})
app.get('/',(req,res)=>{
    res.send('test')
})
app.use('/user',users);

app.listen(3001)