
const User = require("../models/user.model")
const SingupData = async(req , res) => {
    const {fullname, email, password} =  req.body

    const user =  new User({
            fullname: fullname,
            email: email,
            password: password
        })

    const savedUser = await user.save()

    console.log("data inserted", savedUser)

    res.send(`user inserted successfully username = ${fullname} , email = ${email}, pass = ${password}`)
    
}

module.exports = SingupData