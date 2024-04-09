var mongoose=require('mongoose')
var transactionschema=new  mongoose.Schema({
    usermail:{type:String},
    fitem:{type:String},
    fcount:{type:Number},
    fprice:{type:Number},
    date:{type:String},
    time:{type:String}
})
module.exports=new mongoose.model("transactionschema",transactionschema)
