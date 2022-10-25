const mongoose = require("mongoose");
const userSchema =  mongoose.Schema({
	Name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone:{type:Number,required:true}
});
module.exports = User = mongoose.model("user", userSchema);
