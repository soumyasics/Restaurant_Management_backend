var express=require('express')
var schema=require('./staffSchema')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./Uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).array("files");
var staffreg=((req,res)=>{ 
console.log("in Api",req.body.lastname);
    console.log("files",req.files);
    let data=new schema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        contactno:req.body.contactno,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        uploadyourphoto:req.files[0],
        address:req.body.address,
        selectanidproof:req.files[1]
    })
    data.save()
   .then((response)=>{
    console.log(response);
    res.json({
        msg:response
    })
   })
   .catch((err)=>{
    console.log(err);
    res.json({
        msg:err
    })
    console.log("error");
   })
   
})


module.exports={staffreg,upload}
