const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://rutvik00:rutvik00@cluster0.728udnf.mongodb.net/Dev_Tinder");
};

module.exports = connectDB;