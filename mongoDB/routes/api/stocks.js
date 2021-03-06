const router = require("express").Router();
const stockController = require("../../controllers/stockController")

// Matches with "/api/stock"
router.route("/")
  .get(stockController.findAll)
  .post(stockController.create);

// Matches with "/api/stock/:id"
router
  .route("/:id")
  .get(stockController.findById)
  .put(stockController.update)
  .delete(stockController.remove);

module.exports = router;
