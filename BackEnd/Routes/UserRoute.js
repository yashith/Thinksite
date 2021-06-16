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
userRoute.post('/checku', (req, res) => {
  Users.findOne({username:req.body.username},(err,result)=>{
  if (err) {
    res.send(err)
  }
  else if(result) {
    res.setHeader('Content-Type','application/json');
    res.json({username:true})
  }
  else{
    res.setHeader('Content-Type','application/json');
    res.json({username:false})
  }
})
})
userRoute.post('/checke', (req, res) => {
  Users.findOne({email:req.body.email},(err,result)=>{
  if (err) {
    res.send(err)
  }
  else if(result) {
    res.setHeader('Content-Type','application/json');
    res.json({email:true})
  }
  else{
    res.setHeader('Content-Type','application/json');
    res.json({email:false})
  }
})
})

userRoute.post('/signup', (req, res, next) => {
  Users.register(new Users(
    {
      username: req.body.username,
      name: req.body.name,
      category: req.body.category,
      institute: req.body.institute,
      email: req.body.email
    }),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Registration Successful!' });
        });
      }
    });
});
userRoute.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token, status: 'you are succesfully loggedin' })
})

userRoute.get('/search/:name',(req,res)=>{
  let reg = new RegExp('^'+req.params.name)
  Users.find({name:reg},'name institute',(err,result)=>
  {
    if(err){
      res.statusCode=500;
      res.setHeader('Content-Type', 'application/json');
      res.json(err);
    }
    else if(result){
      res.statusCode=200;
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    }
  }
  )
})



module.exports = userRoute;