var mongoose=require('mongoose')
var staffregschema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    contactno:{type:Number},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
    img:{type:Object},
    address:{type:String},
    img2:{type:Object},
    jobposition:{type:String}
})
module.exports=new mongoose.model("staffregschema",staffregschema)