var mongoose=require('mongoose')
var userregschema=new mongoose.Schema({
   firstname:{type:String},
   lastname:{type:String},
   contactno:{type:String},
   email:{type:String},
   password:{type:String},
   address:{type:String},
   district:{type:String},
   state:{type:String},
   pincode:{type:String}

})

module.exports=new mongoose.model("userregschema",userregschema)
