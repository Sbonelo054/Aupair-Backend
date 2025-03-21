//var http = require("http");
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var path = require("path");
var grid = require("gridfs-stream");
const connectDB = require("./routes/connection");
var route = require("./routes/api");
var indexRouter = require("./index")
var router = express.Router();
const mongoose = require("mongoose");
connectDB();
var PORT = process.env.PORT || 3000;

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/test", indexRouter)
app.use('/api', route);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// var db = module.exports = mongoose.connection;
// db.once("open", () => {
//     //confirm here
//     app.locals.gfs = Grid(db.db, mongoose.mongo);
//     app.locals.gfs.collection("uploads");
//     console.log("connection successful");
// });
// app.use(morgan("dev"));
