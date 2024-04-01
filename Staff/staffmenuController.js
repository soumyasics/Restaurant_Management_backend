var express=require('express')
var schema=require('./staffmenuSchema')
var multer=require('multer')
const storage=multer.diskStorage({
  destination:function (req, file, cb) {
    cb(null,'./Uploads')
  },
  filename: function (req,file,cb){
    cb(null,file.originalname);
  }
})
const upload=multer({storage:storage}).single('img')
var staffmenu=((req,res)=>{
  console.log('file',req.file)
  let data=new schema({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    img:req.file,
    ftype:req.body.ftype
  })
  data.save()
  .then((response)=>{
    res.json({
      msg:response
    })
  })
  .catch((err)=>{
    console.log("error")
    res.json({
      msg:err
    })
  })
})

var find=((req,res)=>{
schema.find({})
.then((resp)=>{
  res.json({
    msg:resp
  })
})
.catch((err)=>{
  console.log("error");
  res.json({
    msg:err
  })
})
})
var Starter=((req,res)=>{
  schema.find({ftype:"starter"})
  .then((re)=>{
    res.json({
      msg:re
    })

  })
  .catch((err)=>{
    console.log("err");
    res.json({
      msg: err,
    });
  })
})






module.exports={staffmenu,upload,find,Starter}