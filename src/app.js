const express = require("express")
const req = require("express/lib/request")
const connectDB = require("./config/database")
app = express()

const User = require("./models/user")

app.post("/signup" , async (req , res) => {

    const user = new User({
        firstName : "Rutvik",
        lastName : "Prajapati",
        emailId : "rutvik@mail.com",
        password : "12345"
    })

    try{
        await user.save()
        res.send("User Added Sucessfully !!")
    }catch(error){
        res.status(400).send("Error saving user : " + error.message)
    }
})

connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(7777 , () => {
            console.log("server is listening on port 7777...")
        });
    })
    .catch(() => {
        console.error("Database cannot be connected !!")
    })

