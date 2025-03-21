const mongoose = require("mongoose");

const URI = "mongodb+srv://sbonelongqondo54:Thursday25@cluster0.flaun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async() => {
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("db connected...!")
}

module.exports = connectDB