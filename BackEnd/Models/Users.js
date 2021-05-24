const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',Userschema)