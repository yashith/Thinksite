const express = require('express');
teamRoute = express.Router();
const Teams = require('../Models/Teams')
const Users = require('../Models/Users')
const authenticate = require('../authenticate');
const { populate } = require('../Models/Users');

teamRoute.route('/')
    .get(authenticate.verifyUser, (req, res) => {
        Teams.find({ leader: req.user._id })
        .populate('members')
        .exec((err, result) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result)
        })
    })
teamRoute.route('/create')
    .post(authenticate.verifyUser, (req, res) => {
        Users.findById(req.user._id, (err, result) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({ err: err });
            }
            else {
                Teams.create(
                    {
                        name: req.body.name,
                        leader: req.user._id,
                        category: result.category,
                        members: req.user._id,
                    },
                )
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

            }
        });

    })

module.exports = teamRoute