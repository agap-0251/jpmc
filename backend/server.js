const express = require("express");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken")
const cors = require("cors")
const User = require("./models/user");
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

function genToken(email){
    const token = jwt.sign(email,"cvr2025")
    return token
}

app.get("/",(req,res) => {
    res.json("Hello")
})

app.post("/signup",async (req,res) => {
    const {username,email,password} = req.body;
    console.log(username,email,password)
    try {
        if(!username || !email || !password)
            return res.status(500).json("All fields are required")

        const user = await User.findOne({email})
        console.log(user)
        if(user)
            return res.status(500).json("User already exists")

        const newUser = await User.create({username,email,password})
        await newUser.save()

        const token = genToken(email)

        res.status(200).json({username : username, token : token})
    }
    catch(err){
        console.log(err)
    }
})

app.post("/login",async (req,res) => {
    const {email,password} = req.body;
    try {
        if(!email || !password)
            return res.status(500).json("All fields are required")

        const user = await User.findOne({email})
        console.log(user)
        if(!user)
            return res.status(404).json("User does not exists")

        if(user.password !== password){
            return res.status(500).json("Incorrect password")
        }

        const token = genToken(email)

        res.status(200).json({email : email, token : token})
    }
    catch(err){
        console.log(err)
    }
})

mongoose.connect("mongodb://localhost:27017",{
    dbName : "crud",
})
    .then(() => {
        app.listen(3000,() => {
            console.log("server started")
        })
    })
    .catch(err => console.log(err))

