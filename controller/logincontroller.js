
const LoginData = async (req, res) => {
  try {
    // yahan tak user already verified hai (login middleware se)
    res.redirect("/dashboard")

  } catch (error) {
    console.error(error)
    res.status(500).send("Server error")
  }
}

module.exports = LoginData
