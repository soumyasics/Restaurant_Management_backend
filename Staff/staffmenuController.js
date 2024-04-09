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
  console.log('file',req.body)
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

var search=((req,res)=>{
  schema.find({ftype:"Starter"})
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
var maincourse=((req,res)=>{
  schema.find({ftype:"Main Course"})
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
var beverages=((req,res)=>{
  schema.find({ftype:"Beverages"})
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


module.exports={staffmenu,upload,find, search,maincourse,beverages};