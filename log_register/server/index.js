const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const logModel = require('./models/log')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/log');


app.post('/register', (req, res) => {
    logModel.create(req.body)
    .then(logs=>res.json(logs))
    .catch(err => res.json(err))
    
})
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    logModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record found")
        }
    })
})
    


app.listen(3001, () => {
    console.log("Server is Running")
})
