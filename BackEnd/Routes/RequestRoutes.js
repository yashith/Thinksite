const express = require('express');

requestRoute = express.Router();
const Requests = require('../Models/Requests')
const authenticate = require('../authenticate');
const Users = require('../Models/Users');
const { response } = require('express');


requestRoute.route('/')
    .post(authenticate.verifyUser, (req, res) => {
        Requests.create({
            team:req.body.team,
            from:req.user._id,
            to:req.body.to,
            status:0
        })
        .then((response) => {
            console.log('Team created', response)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true });
        })
        .catch(err => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json(err);
        })
    })
    
requestRoute.route('/sent')
    .get(authenticate.verifyUser, (req, res) => {
        Requests.find({ from: req.user._id })
        .populate('to','name _id ')
        .exec(
             (err, result) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({ err: err });
                }
                else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(result);
    
                }
            }
        )
    })
requestRoute.route('/received')
    .get(authenticate.verifyUser, (req, res) => {
        Requests.find({ to: req.user._id })
        .populate('from','name _id ')
         .exec((err, result) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({ err: err });
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);

            }
        })
    })

module.exports = requestRoute