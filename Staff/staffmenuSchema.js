var mongoose=require('mongoose')
var menuschema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    img:{type:Object}
})
module.exports=mongoose.model('menuschema',menuschema);