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
  const upload = multer({ storage: storage }).array("img");
  const upload2= multer({storage:storage}).single("img2");

var staffreg=((req,res)=>{ 
    console.log("file",req.body);
    let data=new schema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        contactno:req.body.contactno,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        img:req.files[0],
        address:req.body.address,
        img2:req.files[1],
        jobposition:req.body.jobposition
        
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
    console.log("error");
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
            msg:"Login Successfully"
            })
        }
        else{
            res.json({
                status:500,
                msg:"Invalid Password"
            })
        }   
    })
    .catch((err)=>{
       
        res.json({
            status:400,
            msg:"Invalid User"
        })
       
    })
})

module.exports={staffreg,upload,upload2,stafflogin}