var express=require('express')
var schema=require('./userSchema')
var userreg=((req,res)=>{
    let data=new schema({
    firstname:req.body.fname,
    lastname:req.body.lname,
    contactno:req.body.contact,
    email:req.body.email,
    password:req.body.pass,
    address:req.body.address,
    district:req.body.district,
    state:req.body.state,
    pincode:req.body.pincode
    })
})
