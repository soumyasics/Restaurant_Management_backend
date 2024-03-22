const express = require('express')
const router=express.Router()
const staffController=require('./User/userController')
router.post("/userreg",staffController.userreg)


module.exports=router