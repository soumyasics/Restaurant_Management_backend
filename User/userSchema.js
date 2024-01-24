var mongoose=require('mongoose')
var userregschema=new mongoose.Schema({
   firstname:{type:String},
   lastname:{type:String},
   contactno:{type:Number},
   email:{type:String},
   password:{type:String},
   address:{type:String},
   district:{type:String},
   state:{type:String},
   pincode:{type:Number}

})

var userloginschema=new mongoose.Schema({
   username:{type:String},
   password:{type:String}
})
module.exports=new mongoose.model("userregschema",userregschema)
module.exports=new mongoose.model("userloginschema",userloginschema)