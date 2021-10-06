const express = require("express");
const router = express.Router();
const beerController = require("../controller/beerController");

router.get("/list", beerController.listbeers);
router.post("/addBeers", beerController.addbeers);
router.delete("/delete", beerController.deletebeers);

module.exports = router;
