const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
 
const User = require("../models/signupmodel");
const SECRET_KEY = "nibm@123"; //Never ever put secret_key in the plain text (if u push code in to git anyone can get it) 
 
router.post("/", async (req, res) => {
 let user = await User.findOne({ email: req.body.email });
 if (!user) return res.status(400).send("Invalid email provied for Authentication");
 
 let pwValid = await bcrypt.compare(req.body.password, user.password);
 if (!pwValid) return res.status(400).send("Invalid email or password!")
 
 let token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY) //dont keep it here this shoud another model or function
 // let token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
 // expiresIn: "10000"
 // })
 return res.send({ token: token });
 
});
 
module.exports = router;