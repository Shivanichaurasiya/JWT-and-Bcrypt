const express = require("express")
const router = express.Router()
const path = require("path")
const Login = require("../middleware/loginmiddle")
const LoginData = require("../controller/logincontroller")
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});
router.post("/login",Login, LoginData)

module.exports = router