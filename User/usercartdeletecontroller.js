// var express=require('express')
// var schema=require('./usercartdeleteschema')
// const usercartSchema = require('./usercartSchema')
// var usercartdelete=((req,res)=>{
//     let data=new schema({
//         foodid:req.body.foodid
//     })
//     data.save()
//     .then((response)=>{
//         res.json({
//             msg:response
//         })
//        })
//        .catch((err)=>{
//         res.json({
//             msg:err
//         })
//         console.log("error");
//        })
// })

// var deleteById=((req,res)=>{
//     schema.findByIdAndDelete({_id:req.params._id})
//     .exec()
//     .then((resp)=>{
//         res.json({
//             status:200,
//             msg:"deleted successfully"
//         })
//     })
//     .catch((err)=>{
//         console.log("error");
//        res.json({
//         status:500,
//         msg:err
//        })
//     })
// })

// module.exports={usercartdelete,deleteById}