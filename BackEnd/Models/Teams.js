const mongoose = require('mongoose');
const { schema } = require('./Users');

const Teamschema =mongoose.Schema({
    name:{
        type:String,
        reqired:true
    },
    members:[{
        type:Schema.Type.ObjectId,
        ref:'User'
    }]
})

module.exports=mongoose.model('Team',Teamschema)