var express=require('express')
var schema=require('./userSchema')
var userreg=((req,res)=>{
    let data=new schema({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    contactno:req.body.contactno,
    email:req.body.email,
    password:req.body.password,
    address:req.body.address,
    district:req.body.district,
    state:req.body.state,
    pincode:req.body.pincode
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

module.exports={userreg}
