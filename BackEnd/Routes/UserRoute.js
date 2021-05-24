const express = require('express');
userRoute=express.Router();
const Users=require('../Models/Users')

userRoute.route('/')
.get((req,res,next)=>{
    Users.find({})
    .then((user)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    Users.create(req.body)
    .then((user)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    },(err)=>next(err))
    .catch((err)=>next(err))
});

module.exports=userRoute;