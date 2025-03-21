var mongoose = require("mongoose")
var Schema = mongoose.Schema

var OrderSchemaModel = new Schema({
    requester: String,
    requestee: String,
    hourly_rate: String,
    from_time: String,
    to_time: String,
    from_date: String,
    to_date: String,
    status: String,
    job_description: String,
    driving: Boolean,
    bathing_children: Boolean,
    cooking: Boolean,
    cleaning: Boolean,
    homework_help: Boolean,
    other: Boolean,
    pet_friendly: Boolean,
    cash: Boolean,
    card: Boolean
});

module.exports = mongoose.model("Order", OrderSchemaModel);

