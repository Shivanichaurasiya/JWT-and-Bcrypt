const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
// 
let users = [];
// signup route 

app.post('/signup', async (req, res) =>{
    const {username, password} = req.body;
    console.log("username is:",username,"password is:",password)

    // check if user already exist 
    const existingUser = users.find(u => u.username === username)

    if (existingUser){
        return res.status(400).json({message: "user already exists"});
    }

    // hash the password
    
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log("hashed password:",passwordHash)

    // Save User 
    users.push({username, passwordHash});
    res.json({message: "Signup Successful"});

});

// LOgin ROute 

app.post('/login', async (req, res) => {
    const {username, password} = req.body

    // Find user 
    const user = users.find(u => u.username === username);
    if(!user) {
        return res.status(400).json({message: "Invalid username or password"})
    }

    // compare password or match

    const isMatch = await bcrypt.compare(password, user.passwordHash)
    console.log("matching pass",isMatch);

    if (!isMatch) {
        return res.status(400).json({message: "Invalid username or password"})
    }

    res.json({message: "LOgin successful"})
}); 

app.listen(8000, () => console.log("server is running on http://localhost:8000"))

// $2b$10$zemV7sy4g9QjLQ/dAs/IMO5iyHY3ZBepxRrx/aC8.GOXGQabq93i6