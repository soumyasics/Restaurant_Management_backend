const express = require('express')
const router=express.Router()
const staffController=require('./Staff/staffController')
router.post('/staffreg',staffController.upload,staffController.staffreg)





module.exports=router