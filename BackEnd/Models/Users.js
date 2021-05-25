const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true   
    },
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
    // birthday:{
    //     type:Date,
    //     required:true
    // },
    email:{
        type:String,
        required:true,
        unique:true,
        
    }
})

module.exports=mongoose.model('User',Userschema)