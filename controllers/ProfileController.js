var  User = require("../models/User");

const getUser = async(req, res) =>{
    var user = await User.findOne({_id: req.params._id});
    console.log(user);
    res.json(user);
};

async function getUsers(req, res){
    const users = await User.find();
    res.json(users);
}

module.exports = {
    getUser, getUsers
}