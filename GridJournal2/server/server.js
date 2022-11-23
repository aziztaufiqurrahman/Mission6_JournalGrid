const express = require("express");
const mongoose = require("mongoose");
const app = express()
const cors = require('cors')
const data = require('./routes/datas')

app.use(express.json('application/json'))
app.use(cors())
app.use(data)

mongoose.connect('mongodb://localhost:27017/dearme', {
   useUnifiedTopology: true,
   useNewUrlParser: true
})
.then(() => console.log('Info: Database Connected'))
.catch(e => console.log(`Error: ${e}`))

app.use(express.urlencoded({extended: true}))
app.listen(3000, () => console.log(`Info: Server Running at https://localhost:3000`))
