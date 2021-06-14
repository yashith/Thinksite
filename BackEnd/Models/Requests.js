const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Requestschema =mongoose.Schema({
    team:{
        type:Schema.Types.ObjectId,
        ref:'Teams',
        reqired:true
    },
    from:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    to:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:Number,
        min:0,
        max:2,

        // pending-0 ,accepted - 1 , rejected-2
    }
})

module.exports=mongoose.model('Requests',Requestschema)