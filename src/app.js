const express = require("express")
const connectDB = require("./config/database")
app = express()
const User = require("./models/user")


app.use(express.json())



app.post("/signup" , async (req , res) => {

    const userData = req.body;
    console.log(userData)

    const user = new User(userData)

    try{
        await user.save()
        res.send("User Added Sucessfully !!")
    }catch(error){
        res.status(400).send("Error saving user : " + error.message)
    }
});

app.get("/user" , async (req , res) => {
    const emailId = req.body.emailId;

    try{
        const users = await User.find({emailId : emailId});
        if(users.length == 0){
            res.status(404).send("User not found");
        }
        res.send(users)
    }catch(error){
        res.status(400).send("Error while getting User : " , error.message``)
    }
});

app.delete("/user" , async (req, res) => {
    const _id = req.body.userId;

    try{
        const user = await User.findByIdAndDelete(_id);
        res.send("User deleted successfully")
    }catch(error){
        res.status(400).send("Error while deleting User : " , error.message``)
    }
});

app.patch("/user", async (req, res) => {
    console.log("----------------------")
    const data = req.body;
    console.log(data)
    const userId = req.body.userId;

    if (!userId) {
        return res.status(400).send("User ID is required");
    }

    try {
        await User.findByIdAndUpdate(userId, data, {
            new: true,
            runValidators: true
        });

        res.send("User updated successfully");
    } catch (error) {
        res.status(400).send("Error while updating User: " + error.message);
    }
});

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

