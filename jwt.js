const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();
dotenv.config() //load dotenv files
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server is running on the port http://localhost:${port}`);
})


//genrating jwt token
app.post('/user/genratetoken',(req,res)=>{
    let jwtSecretKey = process.env.JWT_SCRET_KEY 
    let data = {
        time:Date(),
        userId:12
    }

    const token=jwt.sign(data,jwtSecretKey)
    res.send(token)
})

//verify jwt token

app.get('/user/validatetoken',(req,res)=>{
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY
    let jwtSecretKey = process.env.JWT_SCRET_KEY

    try{
        const token = req.header(tokenHeaderKey)
        const verified = jwt.verify(token,jwtSecretKey)
        if(verified){
            return res.send("verification successfull")

        }
        else{
            return res.status(401).send(error)
        }
        
    }catch(error){
        return res.status(401).send(error)
    }

})