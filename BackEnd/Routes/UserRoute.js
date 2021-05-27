const express = require('express');
userRoute = express.Router();
const Users = require('../Models/Users')
const passport = require('passport');

userRoute.route('/')
    .get((req, res, next) => {
        Users.find({})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err))
    })
    .post((req, res, next) => {
        res.end('/user invalid request')
    })
    .delete((req, res) => {
        Users.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            })
            .catch((err) => next(err));
    })

// userRoute.route('/signup')
//     .post((req, res, next) => {
//         Users.create(req.body)
//             .then((user) => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(user);
//             })
//             .catch((err) => {
//                 if (err.name === 'MongoError' && err.code === 11000) {
//                     console.log('user exist')
//                 }
//                 else{
//                     console.log(err.code)
//                 }
//             })
//     })
userRoute.route('/signup',(req,res,next)=>{
    Users.register(new Users({username:req.body.username}),
    req.body.password,(erruser)=>{
        if(err){
            res.statusCode=500;
            res.setHeader=('Content-type','application/json');
            res.json({success:true,status:'Registration Successful'});
        }
    })
})
userRoute.route('/login',passport.authenticate('local'),(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success:true,status:'you are succesfully loggedin'})
})



module.exports = userRoute;