var mongoose=require('mongoose');
var dashboardschema=new mongoose.Schema({
    userid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"userregschema"
    },
    staffid:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"staffregschema"
    }
    
})
module.exports=new mongoose.model("dashboard",dashboardschema);