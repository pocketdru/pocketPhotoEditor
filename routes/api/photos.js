const router = require("express").Router();
const photosController = require("../../controllers/photosController");
const multer = require("multer");
const upload = multer({dest: "uploads/"});

router
    .route("/")
    .get(photosController.findAll, function() {
        console.log("orr");
    })
    .post(photosController.create, function(){
        "your photo is in the database!"
    });
; 

router.post("/photos", upload.single("photoPhoto"), (req, res, next) => {
    console.log(req.file)
})

router
    .route("/photos")
    .get(photosController.findAll, function() {
        console.log("orr");
    })
    .post(photosController.create, function(){
        "your photo is in the database!"
    });
;

router
    .route("/api/photos/")
    .get(photosController.findAll, function() {
        console.log("Getting photos");
    })
    .post(photosController.create, function() {
        console.log("your photo is in the database!");
    })
    .delete(photosController.remove);

    module.exports = router;