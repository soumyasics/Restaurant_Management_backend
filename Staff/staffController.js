var express=require('express')
var schema=require('./staffSchema')
var staffreg=((req,res)=>{ 
    let data=new schema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        contactno:req.body.contactno,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        uploadyourphoto:req.body.uploadyourphoto,
        address:req.body.address,
        selectanidproof:req.body.selectanidproof
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
module.exports={staffreg}
