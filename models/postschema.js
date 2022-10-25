const mongoose = require('mongoose')
const schema = mongoose.Schema
const postSchema = new schema({
    title:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true,
        unique:false

    },
    paragraph:{
        type:String,
        required:true,
        unique:false

    }
})
module.exports=post=mongoose.model("post",postSchema)


