var express=require('express')
var schema=require('./contactSchema')
var contactus=((req,res)=>{
    let data=new schema({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        subject:req.body.subject,
        message:req.body.message
    })
    data.save()
    .then((response)=>{
        res.json({
            status:200,
            msg:response
        })
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:err
        })
        console.log('error');
    })
})
module.exports={contactus}