const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const beerController = require("../controller/beerController");
const beerValidator = require("../validator/beerValidator");
router.get("/list", beerController.listbeers);
router.get("/random", beerController.random);
router.post(
  "/",
  body("_id").exists(),
  body("uid").exists(),
  body("brand").exists(),
  body("name").exists(),
  body("style").exists(),
  body("hop").exists(),
  body("yeast").exists(),
  body("malts").exists(),
  body("ibu").exists(),
  body("alcohol").exists(),
  body("blg").exists(),
  beerValidator.addBeer,
  beerController.addbeer
);

module.exports = router;
