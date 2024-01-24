const express = require('express')
const router=express.Router()
const userSchema=require('./User/userController')
router.post('/userregister',userSchema.userreg)
const staffSchema=require('./Staff/staffController')
router.post('/staffregister',staffSchema.staffreg)
module.exports=router