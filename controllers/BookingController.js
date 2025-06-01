const User = require("../models/Order");
const mongoose = require("mongoose");
const Device = require("../models/device");
const Order = require("../models/Order");

const bookOrder = async(req, res)=> {
        var orderContent = new Order({
            requester: req.body.requester,
            requestee: req.body.requestee,
            hourly_rate: req.body.hourly_rate,
            number_of_hours: req.body.number_of_hours,
            from_date: req.from_date,
            to_date: req.body.to_date,
            status: "Not Accepted",
            job_description: req.body.job_description,
            driving: req.body.driving,
            bathing_children: req.body.bathing_children,
            cooking: req.body.cooking,
            cleaning: req.body.cleaning,
            homework_help: req.body.homework_help,
            other: req.body.other,
            pet_friendly: req.body.pet_friendly,
            cash: req.body.cash,
            card: req.body.card
        });

        orderContent.save().then(()=>{
            res.send({"message": "Booking has been made", "successful": true});
            console.log(orderContent);
        }).catch((err)=> {
            console.log(err);
            res.json(err)
        })
}

async function booking(req, res) {
    const order = await Order.find({_id:req.params._id}).populate({path: "requester", model: "User"}).populate({path: "requestee", model: "User"})
    .catch((err)=> {
        res.json(err)
    })
    res.json(order);
    }

    async function bookings(req, res) {
        const order = await Order.find({}).populate({path: "requester", model: "User"}).populate({path: "requestee", model: "User"})
        .catch((err)=> {
            res.json(err)
        })
        res.json(order);
        }

async function startBooking(req, res){
    const update = await Order.findByIdAndUpdate({"_id":req.params.id},{"status":"STARTED"})
    .catch((err) => {
        res.json(err)
    })
    res.json(update);
}

async function doneBooking(req, res){
    const finishBooking = await Order.findByIdAndUpdate({"_id":req.params.id},{"status":"DONE"})
    .catch((err) =>{
        res.json(err);
    });
    res.json(finishBooking)
}

async function cancelBooking(req, res){
    const cancelBooking = await Order.findByIdAndUpdate({"_id":req.params.id},{"status":"CANCELLED"})
    .catch((err) => {

    });
    res.json(cancelBooking)
}

module.exports = {
    bookOrder, startBooking, doneBooking, cancelBooking, booking, bookings
}