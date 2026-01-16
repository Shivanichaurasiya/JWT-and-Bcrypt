
const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const Signup = async (req, res, next) => {
    const {fullname, email, password} = req.body
    try{
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt)
        req.body.password = passwordHash
        
    }
    catch (err) {
        console.log(err)
    }

    next();
}

module.exports = Signup;