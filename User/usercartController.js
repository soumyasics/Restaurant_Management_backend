var express=require('express')
var schema=require('./usercartSchema') 
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
var usercart=((req,res)=>{
    let data=new schema({
    userid:req.body.userid,
    foodid:req.body.foodid,
    date:new Date(),
    count:req.body.count
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
    var find = (req, res) => {
        schema
          .find({ userid:( req.params._id)}).populate('foodid')
          .then((respon) => { 
            res.json({
              msg: respon,
            });
          })
          .catch((err) => {
            res.json({
              msg: err,
            });
          });
      };
     
      var deleteById=((req,res)=>{
            schema.findByIdAndDelete({_id:req.params._id})
            .exec()
            .then((resp)=>{
                res.json({
                    status:200,
                    msg:"deleted successfully"
                })
            })
            .catch((err)=>{
                console.log("error");
               res.json({
                status:500,
                msg:err
               })
            })
        })

        
module.exports={usercart,find,deleteById}


