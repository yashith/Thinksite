const express = require('express');
userRoute = express.Router();
const Users = require('../Models/Users')
const passport = require('passport');
const authenticate = require('../authenticate')

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
userRoute.post('/signup', (req, res, next) => {
    Users.register(new Users(
        {username: req.body.username,
        name: req.body.name,
        category: req.body.category,
        institute: req.body.institute,
        email: req.body.email
        }), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  });
userRoute.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id:req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true,token:token, status: 'you are succesfully loggedin' })
})



module.exports = userRoute;