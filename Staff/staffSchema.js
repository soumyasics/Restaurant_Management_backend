var mongoose=require('mongoose')
var staffregschema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    contactno:{type:Number},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
    uploadyourphoto:{type:Object},
    address:{type:String},
    selectanidproof:{type:Object}
})

module.exports=new mongoose.model("staffregschema",staffregschema)