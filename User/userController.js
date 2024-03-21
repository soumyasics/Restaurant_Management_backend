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
        msg: response,
      });
    })
    .catch((err) => {
      res.json({
        msg: err,
      });
      console.log(err);
    });
};
var find = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  schema
    .findOne({ email: req.body.email })
    .exec()
    .then((response) => {
      if (password == response.password) {
        res.json({
          status: 200,
          msg: "User Logged In Successfully",
        });
      } else {
        res.json({ status: 500, msg: "Invalid Password" });
      }
    })

    .catch((err) => {
      res.json({
        msg: "Invalid user",
        status: 400,
      });
      console.log(err);
    });
};
module.exports = { userreg, find };
