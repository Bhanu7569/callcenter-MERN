const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Router = require('./Routes/Route.js')



const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())


app.use('/contacthub', Router)
app.use('/contacthub', Router)

port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URL).then(
    ()=>{
        console.log("DB is Connected!")
    }
)

app.listen(port, (req, res)=>{
    console.log(`Server is running on port ${port}`)
})