const express= require('express');
const app = express()
const session = require('express-session');
app.use(session({
    secret:"sample-react",
    resave:false,
    saveUninitialized:false
}))
app.get('/',function(req,res){
    if(req.session.page_view){
        req.session.page_view ++
        res.send("you visited this page"+ req.session.page_view + "times")


    }else{
        req.session.page_view = 1;
        res.send("welcome to the page for the fiirst time")
    }
})
app.listen(8080,()=>{
    console.log("server is running on http://localhost:8080")

})


// 