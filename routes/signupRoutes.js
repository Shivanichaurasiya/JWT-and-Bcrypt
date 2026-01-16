const express = require("express")
const router = express.Router()
const Signup = require("../middleware/signupmiddle")
const SingupData = require("../controller/signupcontroller")
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});
router.post("/signup",Signup, SingupData)

module.exports = router