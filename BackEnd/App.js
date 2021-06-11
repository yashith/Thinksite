const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
let authenticate=require('./authenticate')
require('dotenv/config')
const users=require('./Routes/UserRoute')
const team=require('./Routes/TeamRoutes')
const app= express()
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
mongoose.connect(process.env.DB_Connection,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{if(err){console.log(err)}else{console.log("connected")}})
function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}
app.get('/',(req,res)=>{
    res.send('test')
})
app.use('/user',users);
// app.use(auth)
app.use('/team',team)

app.listen(3001)