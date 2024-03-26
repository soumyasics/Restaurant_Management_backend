var express=require('express')
var schema=require('./usercartSchema') 
var usercart=((req,res)=>{
    let data=new schema({
    userid:req.body.userid,
    foodid:req.body.foodid,
    date:req.body.date,
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
    var finditem  = (req, res) => {
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
    module.exports={usercart,finditem}


