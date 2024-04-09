var express = require("express");
var schema = require("./userSchema");
var userreg = (req, res) => {
  let data = new schema({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    contactno: req.body.contactno,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    district: req.body.district,
    state: req.body.state,
    pincode: req.body.pincode,
  });
  data
    .save()
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
};
var userlogin = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  schema
    .findOne({ email: req.body.email })

    .exec()
    .then((response) => {
      if (password == response.password) {
        res.json({
            status:200,
            msg:"login successful"
        })
       }
       else{
        res.json({
          status: 500,
          msg: "invalid password",
        });
      }
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"invalid user"
        })
        
    })
})



module.exports={userreg,userlogin}
