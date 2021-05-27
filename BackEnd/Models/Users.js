const mongoose = require('mongoose');
const Userschema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User=new Userschema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true 
    },
    institute:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    }
});
User.plugin(passportLocalMongoose)

module.exports=mongoose.model('User',User)