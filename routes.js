const express = require("express");
const router = express.Router();
const userSchema = require("./User/userController");
router.post("/userregister", userSchema.userreg);
router.post("/userlogin", userSchema.userlogin);
router.post("/userlist", userSchema.userlist);
router.post("/usercount",userSchema.usercount)
const staffSchema = require("./Staff/staffController");
router.post("/staffregister", staffSchema.upload, staffSchema.staffreg);
router.post("/stafflist", staffSchema.find);
router.post("/stafflogin", staffSchema.stafflogin);
router.post('/staffcount',staffSchema.scount)
const staffmenuSchema = require("./Staff/staffmenuController");
router.post("/staffmenu", staffmenuSchema.upload, staffmenuSchema.staffmenu);
router.post("/menucard", staffmenuSchema.find);
router.post("/starter", staffmenuSchema.Starter);
router.post("/beverages", staffmenuSchema.Beverages);
router.post("/maincourse", staffmenuSchema.Maincourse);
const contactSchema = require("./User/contactController");
router.post("/contactfeed", contactSchema.contactus);
router.post("/feedback", contactSchema.findall);
const staffmenudeleteschema = require("./Staff/staffmenudeletecontroller");
router.post("/deletecard/:_id", staffmenudeleteschema.deleteById);
const usercartschema = require("./User/usercartController");
router.post("/usercart", usercartschema.usercart);
router.post("/usercartfind", usercartschema.find);
router.post("/deleteitem/:_id", usercartschema.deleteById);
// const usercartdeleteschema=require('./User/usercartdeletecontroller')
// router.post('/cartdelete/:_id',usercartdeleteschema.deleteById)
const transactionschema=require("./Admin/TransactionController")
router.post("/transaction",transactionschema.transdetails)
router.post('/orderhistory',transactionschema.orderhistory)
router.post('/transhistory',transactionschema.transhistory)
module.exports = router;
