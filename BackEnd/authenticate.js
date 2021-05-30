const passport = require('passport');
const LocalStratergy =require('passport-local').Strategy;
const Users =require('./Models/Users');
const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
require('dotenv/config')

passport.use(new LocalStratergy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

exports.getToken = function(user){
    return jwt.sign(user,process.env.secretKey,{expiresIn:3600});
}

var opts ={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=process.env.secretKey;

exports.jwtPassport =passport.use(new JwtStratergy(opts,(jwt_payload,done)=>{
    console.log("JWT_payload:",jwt_payload);
    Users.findOne({_id:jwt_payload._id},(err,user)=>{
        if(err){
            return done(err,false)
        }
        else if(user){
            return done(null,user);
        }
        else{
            return done(null,false)
        }
    })
}));

exports.verifyUser = passport.authenticate('jwt',{session:false})