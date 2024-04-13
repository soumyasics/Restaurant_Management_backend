var express=require("express")
var tschema=require("./TransactionSchema")
var transdetails=(req,res)=>{
    let fdata=new tschema({
        usermail:req.body.usermail,
        fitem:req.body.fitem,
        fcount:req.body.fcount,
        fprice:req.body.fprice,
       
        date:req.body.date,
        time:req.body.time
    })
    fdata.save()
    .then((response) => {
        res.json({
          status: 200,
          msg: response,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          msg: err,
        });
        console.log(error);
      });
}
var transhistory=(req,res)=>{
  tschema.find({}).select('usermail fitem fprice')

  .then((re)=>{
    res.json({
      status:200,
      msg:re
    })

  })
  .catch((err)=>{
    console.log("err");
    res.json({
      msg: err,
      status:400
    });
  })
  }

module.exports={transdetails,transhistory};