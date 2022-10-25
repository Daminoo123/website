const router = require("express").Router();
const User = require('../models/User.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { registervalidation, validation, loginValidation } = require("../midleware/validator");
const isAuth = require("../midleware/isAuth");
const { login, register } = require("../controllers/user");


router.post("/register",registervalidation(),validation,register)
router.post('/login',login)

router.get('/current',isAuth,(req,res)=>{
	res.send("u are authorized to pass")
}
)
module.exports = router;