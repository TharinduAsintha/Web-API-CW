// const express = require('express')
// const bcrypt = require('bcrypt')
// const router = express.Router()
// const Signup = require('../models/signupmodel')


// router.post('/signup', async (req, res)=>{
//     let salt = await bcrypt.genSalt(10)
//     let hashpw = await bcrypt.hash(req.body.password, salt)
//     console.log(hashpw)
//     let user = new Signup({
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//         email : req.body.email, 
//         password : hashpw
//     });
//     try {
//         user = await user.save();
//         return res.send({
//             email: user.email,
//             username: user.firstname
//         });
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// });
// module.exports = router


const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/signupmodel")
const router = express.Router();
 
router.post("/", async (req, res) => {
 
 let salt = await bcrypt.genSalt(10);
 let hashpw = await bcrypt.hash(req.body.password, salt);
 
 let user = new User({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email, 
    password : hashpw
 
 });
 try {
 user = await user.save();
 return res.send({
 firstname: user.firstname,
 email: user.email
 });
 } catch (err) {
 return res.status(500).send(err.message);
 }
});
 
module.exports = router;
