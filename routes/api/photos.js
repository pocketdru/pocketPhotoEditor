const router = require("express").Router();
const photosController = require("../../controllers/photosController");

router
    .route("/")
    .get(photosController.findAll)
    .post(photosController.create, function(){
        "your photo is in the database!"
    });

    // router
    // .route("/photos")
    // .get(photosController.findAll, function() {
    //     console.log("Getting photos");
    // })
    // .post(photosController.create, function() {
    //     console.log("your photo is in the database!");
    // })
    // .delete(photosController.remove);    

router
    .route("/api/photos")
    .get(photosController.findAll, function() {
        console.log("Getting photos");
    })
    .post(photosController.create, function() {
        console.log("your photo is in the database!");
    })
    .delete(photosController.remove);

    module.exports = router;