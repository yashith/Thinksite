const express = require('express');
userRoute = express.Router();
const Users = require('../Models/Users')

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

userRoute.route('/signup')
    .post((req, res, next) => {
        Users.create(req.body)
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            })
            .catch((err) => {
                if (err.name === 'MongoError' && err.code === 11000) {
                    console.log('user exist')
                }
                else{
                    console.log(err.code)
                }
            })
    })



module.exports = userRoute;