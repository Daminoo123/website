const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT
const cors = require("cors")
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());
const connect = require('./db')
connect()
app.use('/api/users',require('./routes/user'))
app.use('/api/posts',require('./routes/posts'))
app.listen(port,err=>(err?console.error(err):console.log('serveur is running or port:'+port)))



