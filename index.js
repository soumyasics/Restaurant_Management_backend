const express = require('express')
const bodyparser=require('body-parser')
const routes=require('./routes')
const cors=require('cors')
const dbConnection=require('./dbConnection')
const app = express()
app.use(express.static(`${__dirname}/Uploads`));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())


app.use('/',routes)
app.listen(4000,()=>{
    console.log("server  satrted  4000");
})