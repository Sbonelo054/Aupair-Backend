const User = require("../models/User");
const mongoose = require("mongoose");

exports.saveImage = function(err, res) {
    return res.json({
        "successful":true,
        "message":"Image processed"
    })
}