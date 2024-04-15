 var mongoose=require('mongoose')
var cartschema=new mongoose.Schema({
   userid:{
    type:mongoose.Types.ObjectId,
    required:true,
    ref:"userregschema" 
   },
   foodid:
   {type:mongoose.Types.ObjectId,
required:true,
ref:"menuschema"},
   date:Date,
   count:Number
})
module.exports=new mongoose.model('cartschema',cartschema)