const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teamschema =mongoose.Schema({
    name:{
        type:String,
        reqired:true
    },
    leader:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    category:{
        type:String,
        
    },
    members:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
})

module.exports=mongoose.model('Teams',Teamschema)