const express = require('express')
const bodyparser=require('body-parser')
const routes=require('./routes')
const dbConnection=require('./dbConnection')
const app = express()

app.use(bodyparser.json())
app.use('/',routes)
app.listen(4000,()=>{
    console.log("server  satrted  4000");
})