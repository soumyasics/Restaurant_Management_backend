var express=require('express')
var schema=require('./staffmenudeleteschema')
const staffmenuSchema = require('./staffmenuSchema')
var staffmenudelete=((req,res)=>{
    let data=new schema({
        foodid:req.body.foodid
    })
    data.save()
    .then((response)=>{
        res.json({
            msg:response
        })
       })
       .catch((err)=>{
        res.json({
            msg:err
        })
        console.log("error");
       })
})

var deleteById=((req,res)=>{
    staffmenuSchema.findByIdAndDelete({_id:req.params._id})
    .exec()
    .then((resp)=>{
        res.json({
            status:200,
            msg:"deleted successfully"
        })
    })
    .catch((err)=>{
        console.log("error");
       res.json({
        status:500,
        msg:err
       })
    })
})

module.exports={staffmenudelete,deleteById}