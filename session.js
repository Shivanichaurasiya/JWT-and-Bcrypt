const express= require('express');
const app = express()
const session = require('express-session');
app.use(session({
    secret:'sample-react',    // A secret key is used to sign the session ID cookies . It will prevent temporing odf session data. it should be always strong and confidencial .
    resave:false,           //  force the session to be saved again to the session store on every request 
    // values: true: sevas session every time  can cause performance issue.
    //values : false: saves only session data changes (recommended)
    saveUninitialized:false,    // decides whether to save a new session to the store even if it has no data. 
    // values: true: save new sessions even if they are empty (not recommended)
    // values: false: do not save new sessions if they are empty , means save it only when data is added (recommended)  . we use false because it reduce unneccessary storage .
    // cookie:{ secure:false }   // This option is used to configure the behavior of the session ID cookie.
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