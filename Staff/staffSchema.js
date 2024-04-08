var mongoose=require('mongoose')
var staffregschema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number},
    dob:{type:Date},
    contactno:{type:Number},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
    uploadyourphoto:{type:Object},
    address:{type:String},
    selectanidproof:{type:Object},
    jobposition:{type:String}
})

module.exports=new mongoose.model("staffregschema",staffregschema)