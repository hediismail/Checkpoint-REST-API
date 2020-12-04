const express = require('express')
require('dotenv').config()
const dbconnect = require('./config/connectDB')
const app = express()

dbconnect()
app.use(express.json())
app.use('/api/contact', require('./routes/contacts'))
const PORT = process.env.PORT

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log('the server is running'),
)
