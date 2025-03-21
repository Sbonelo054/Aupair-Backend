const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //basic information
    name: String,
    surname: String, 
    email: String,
    password: String,

    //personal information
    mobile: String,
    identification: String,
    gender: String,
    address: String,

    //work information
    nanny: Boolean,
    language: String,
    about: String,
    smoke: Boolean,

    //skills information
    license: Boolean,
    swim: Boolean,
    cpr_and_first_aid_certified: Boolean,
    infant_cpr_certified: Boolean,

    //experience information
    highest_level_of_education: String,
    outline_experience: String,
    activities: String,
    hourlyRate: String,
});


module.exports = mongoose.model("User", UserSchema)