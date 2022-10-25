const router = require("express").Router();
const User = require('../models/User.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { registervalidation, validation, loginValidation } = require("../midleware/validator");
const isAuth = require("../midleware/isAuth");


exports.register=async(req,res)=>{
    try {
		const {name,email,password,phone}=req.body;
		const foundUser = await User.findOne({email})
		if(foundUser){
		return res.status(400).send({errors:[{msg:"email already used"}]})
	}
		const saltRounds = 10;
		const hashedPassword= await bcrypt.hash(password,saltRounds);
		const newUser = new User({...req.body});
		newUser.password=hashedPassword;
		await newUser.save()
		const token = jwt.sign(
			{id:newUser._id},
			process.env.jwtprivatekey,
			{expiresIn:'24h'})
		res.status(200).send({msg:"register success",user:newUser,token})	
	} catch (error) {     
		console.log(error)    
	}}
exports.login=async(req,res)=>{
	try {
		const {email,password}=req.body;
		const foundUser = await User.findOne({email})
		if(!foundUser){
		return res.status(400).send({errors:[{msg:"retry"}]})
	}
		const checkpassword = await bcrypt.compare(password,foundUser.password)
		if(!checkpassword){
		return res.status(400).send({errors:[{msg:"retry"}]})}
		const token = jwt.sign(
			{id:foundUser._id},
			process.env.jwtprivatekey,
			{expiresIn:'24h'})
		res.status(200).send({msg:'loged in',user : foundUser,token})
	} catch (error) {
		console.log(error)
		
	}
}