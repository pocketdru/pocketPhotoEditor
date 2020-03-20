const router = require("express").Router();
const photosController = require("../../controllers/photosController");

router
    .route("/myfeed")
    .post(photosController.create, function(){
        "your photo is in the database!"
    })

router
    .route("/api/photos/")
    .get(photosController.findAll)
    .post(photosController.create, function() {
        console.log("your photo is in the database!");
    })
    .delete(photosController.remove);

    module.exports = router;