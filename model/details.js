const mongoose=require('mongoose');

const detailSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String
})

module.exports=mongoose.model('Detail',detailSchema);