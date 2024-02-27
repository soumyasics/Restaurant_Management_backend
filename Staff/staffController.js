var express=require('express')
var schema=require('./staffSchema')
var multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  });
  const upload=multer({storage:storage}).any('img','img2')

var staffreg=((req,res)=>{ 
    let img=req.file;
    let img2=req.file;
    console.log("file",req.body);
    let data=new schema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        contactno:req.body.contactno,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        img:req.file,
        address:req.body.address,
        img2:req.file
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
module.exports={staffreg,upload}
