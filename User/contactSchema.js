var mongoose=require('mongoose')
var contactusschema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    number:{type:Number},
    subject:{type:String},
    message:{type:String}
})
module.exports=new mongoose.model("contactusschema",contactusschema)