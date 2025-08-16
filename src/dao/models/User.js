const mongoose = require('mongoose');

const collection = 'Users_Mock';

const schema = new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    pets:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Pets_Mock'
    }]
})

const userModel = mongoose.model(collection,schema);

module.exports = userModel;