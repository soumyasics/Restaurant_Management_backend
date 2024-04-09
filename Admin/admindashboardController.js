var express=require('express')
var dashschema=require('./dashboardschema')
var dashcount=((req,res)=>{
 dashschema.db.collection.count({})
 .then((response)=>{
    console.log(response);
    res.json({
        msg:response
    })
 })
 .catch((err)=>{
    res.json({
        msg:error
    })
 })
})
module.exports={dashcount}
