const User = require("../models/User");
const bcrypt = require("bcrypt");
//const fs = require("fs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        const user = new User({
            name:req.body.name,
            surname:req.body.surname,
            email: req.body.email,
            password: hashedPass,
            mobile: req.body.mobile,
            identification: req.body.identification,
            gender: req.body.gender,
            address: req.body.address,
            nanny: req.body.nanny,
            language: req.body.language,
            about: req.body.about,
            smoke: req.body.smoke,
            license: req.body.license,
            swim: req.body.swim,
            cpr_and_first_aid_certified: req.body.cpr_and_first_aid_certified,
            infant_cpr_certified: req.body.infant_cpr_certified,
            highest_level_of_education: req.body.highest_level_of_education,
            outline_experience: req.body.outline_experience,
            activities: req.body.activities,
            hourlyRate: req.body.hourlyRate
        })
        user.save().then(()=> {
             res.send({
                "message":"You have been registered",
                "successful": true })
             console.log(user,": user saved")
        }).catch((err)=> {
             console.log(err);
            res.json({
                "successful": false
            })
        })
    })
}

// const readImage = function(req, res){
//     req.app.locals.gfs.files.findOne({filename:req.params.filename}, (err, file) => {
//         if(!file || file.length === 0){
//             return defaultImage(res);
//         }
//         if(file.contentType === "image/*") {
//             const readStream = req.app.locals.gfs.createReadStream(file.filename);
//             readStream.pipe(res);
//         }
//     });
// }

// function defaultImage(res){
//     fs.readFile("public/images/profile/placeholder_square.jpg", function(err, data){
//         if(err){
//             return res.status(404).json({
//                 "successful":false,
//                 "message": "Image could not be found"
//             });
//         } else {
//             res.writeHead(200, {"Content-Type": "image/jpeg"})
//             res.send(data)
//         }
//     })
// }

const login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({$or:[{email:username},{mobile:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name:user.name},'verylongkeyindeed',{expiresIn:"24h"})
                    res.send({
                        message: "Login successful",
                        "id":user._id,
                        "successful":true,
                        "token":token
                    })
                }else{
                    res.send({
                        message:"password invalid",
                        "successful":false
                    })
                }
            })
        } else {
            res.json({
                message:"No user found"
            })
        }
    })
}

const isAuthorized = (req, res) => {
    return res.json({
        "successful":true,
        "message":"user has a valid token"
    });
}

module.exports = {
    register, login, isAuthorized
}