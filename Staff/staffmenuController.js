var express=require('express')
var schema=require('./staffmenuSchema')
var multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,"./Uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  });
  
  const upload=multer({storage:storage}).single('img')
var menu=((req,res)=>{
  let img=req.file;
  console.log("file",req.body);
  let data=new schema({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    img:req.file
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
  })
})
var finda=((req,res)=>{
    schema.find({})
    .then((resp)=>{
        res.json({
            msg:resp
            // data:resp
        })
    })
    .catch((err)=>{
        res.json({
            msg:err
        })
    })
})
module.exports={menu,upload,finda}