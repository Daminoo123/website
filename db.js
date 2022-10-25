const mongoose = require('mongoose')
require('dotenv').config()
module.exports =async()=>{
    
try {
   await mongoose.connect(process.env.db)
    console.log('db connected')
    
} catch (error) {
    console.log(error)
    console.log('db not connected')
    
}
}