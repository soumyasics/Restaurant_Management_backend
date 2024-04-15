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
        age:req.body.age,
        dob:req.body.dob,
        contactno:req.body.contactno,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        uploadyourphoto:req.files[0],
        address:req.body.address,
        selectanidproof:req.files[1],
        jobposition:req.body.jobposition
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

var find=((req,res)=>{
  schema.find({})
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
})
})

var stafflogin=((req,res)=>{
  var email=req.body.email
  var password=req.body.password
 schema.findOne({email:req.body.email})
 
 .exec()
  .then((response)=>{
     if(password==response.password){
      res.json({
          status:200,
          msg:"login successfully"
      })
     }
     else{
      res.json({
          status:500,
          msg:"invalid password"
      })
     }
  })
  .catch((err)=>{
      res.json({
          status:400,
          msg:"invalid user"
      })
      
  })
})

var scount=((req,res)=>{
  schema.countDocuments()
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
  })
})
module.exports={staffreg,upload,find,stafflogin,scount}
