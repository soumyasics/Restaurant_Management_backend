const express = require('express')
const router=express.Router()
const userSchema=require('./User/userController')
router.post('/userregister',userSchema.userreg)
router.post('/userlogin',userSchema.userlogin)
router.post('/userlist',userSchema.userlist)
const staffSchema=require('./Staff/staffController')
router.post('/staffregister',staffSchema.staffreg)
const staffmenuSchema = require('./Staff/staffmenuController')

router.post('/staffmenu',staffmenuSchema.upload,staffmenuSchema.staffmenu)
router.post('/menucard',staffmenuSchema.find)

router.post("/starters",staffmenuSchema.search)
router.post("/maincourse",staffmenuSchema.maincourse)
router.post("/beverages",staffmenuSchema.beverages)
const transactionschema=require('./Admin/TransactionController')
router.post("/transaction",transactionschema.transdetails)
module.exports=router
