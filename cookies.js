const express = require('express');
var cookieParser=require('cookie-parser')
const app = express()
app.use(cookieParser())
app.get('/',function(req,res){
    res.cookie('name','express').send('cookie-set');

})

app.listen(8080,()=>{
    console.log("server is running on http://localhost:8080")

})