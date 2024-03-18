var mongoose=require('mongoose')
var menuschema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    img:{type:Object},
    ftype:{type:String}
})
module.exports=new mongoose.model('menuschema',menuschema)