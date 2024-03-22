const express = require('express')
const router=express.Router()
const staffmenuController=require('./Staff/staffmenuController')
const staffController=require('./Staff/staffController')
const contactController=require('./User/contactController')
router.post('/staffreg',staffController.upload,staffController.upload2,staffController.staffreg)
router.post('/stafflogin',staffController.stafflogin)
router.post('/contactus',contactController.contactus)
router.post('/menu',staffmenuController.upload,staffmenuController.menu)
router.post('/menucard',staffmenuController.finda)




module.exports=router