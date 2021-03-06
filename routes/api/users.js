const router = require("express").Router();
const usersController = require("../../controllers/usersController");
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create,function() {
      console.log("Post working!");
  });

router
  .route("/:id")
  .get(usersController.findUser)
  .put(usersController.update)
  .delete(usersController.remove);

 
module.exports = router;