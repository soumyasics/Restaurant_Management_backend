const express = require('express')
const routes=require('./routes')
const bodyparser=require('body-parser')
const dbConnection=require('./dbConnection')
const cors=require('cors')
const app = express()
app.use(express.static(`${__dirname}/Uploads`));
app.use(bodyparser.urlencoded( { extended: true} ))
app.use(bodyparser.json())
app.use(cors())
const port=4000

app.use('/',routes)
app.listen(port,()=>{
    console.log("server  started  4000");
})