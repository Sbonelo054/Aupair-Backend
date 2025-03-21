const express = require("express");
var multer = require("multer");
//var GridFsStorage = require("multer-gridfs-storage");
var mongoDB = "mongodb+srv://sbonelongqondo54:sbonelongqond54@cluster0.flaun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const router = express.Router();
const AuthController = require("../controllers/AuthController");
//const ImageController = require("../controllers/imageController");
const BookingController = require("../controllers/BookingController");
const ProfileController = require("../controllers/ProfileController");

// const storage = new GridFsStorage({url: mongoDB, file: async (req, file) => {
//     let pictureFile = await req.app.locals.gfs.files.findOne({filename:req.params.id});
//     if(pictureFile !== null) {
//         let gridStore = await req.app.locals.gfs.remove({_id: pictureFile._id, root: "uploads"});
//         console.log(gridStore)
//     }

//     return new Promise((resolve, reject) => {
//         const filename = req.params.id;
//         const fileInfo = {filename: filename, bucketName: "uploads"};
//         resolve(fileInfo)
//     })
//   }
// });

//const upload = multer({storage});

router.get("/",(req, res) => {
    res.send("this is a booking app route")
});
//user
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/authorized", AuthController.isAuthorized);

router.get("/user/:_id", ProfileController.getUser);
router.get("/users", ProfileController.getUsers);

//image
// router.post("/image/:_id", upload.single('image'), ImageController.saveImage);
// router.get("/image/:filename", AuthController.readImage);

//booking
router.post("/book", BookingController.bookOrder);
router.get("/booking/:_id", BookingController.booking);
router.get("/bookings", BookingController.bookings);
router.post("/booking/start/:_id", BookingController.startBooking);
router.post("booking/cancel/:_id", BookingController.cancelBooking);
router.post("/booking/done/:_id", BookingController.doneBooking);


module.exports = router;
