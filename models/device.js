var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DeviceModelSchema = new Schema({
    user: {type: Schema.Types.ObjectId, res: "User"},
    fcm_token: String,
    device_id: String,
    date_created: Date,
    date_updated: Date
});

module.exports = mongoose.model("Devices", DeviceModelSchema);