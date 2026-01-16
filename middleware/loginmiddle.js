const User = require("../models/user.model")
const bcrypt = require("bcryptjs")

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log("Req body:", req.body)


    // 1. Check if user exists
    const user = await User.findOne({ email })
    console.log("user from DB:",user)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password)
    console.log("password match:", isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // 3. If match, attach user to request
    req.user = user
    next()

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = Login
