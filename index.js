const express = require('express')
const bodyparser=require('body-parser')
const routes=require('./routes')
const dbConnection=require('./dbConnection')
const cors=require('cors')
const app = express()
app.use(cors())
app.use(bodyparser.json())

app.use('/',routes)

app.listen(4000,()=>{
    console.log("server  satrted  4000");
})