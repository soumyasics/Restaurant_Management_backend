const express = require('express')
const router=express.Router()
const userSchema=require('./User/userController')
router.post('/userregister',userSchema.userreg)
router.post('/userlogin',userSchema.find)



module.exports=router
