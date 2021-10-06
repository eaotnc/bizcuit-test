const express = require("express");
const router = express.Router();
const BeerController = require("../controller/BeerController");
const { userValidationRules, validate } = require("../validator/beerValidator");

router.get("/list", BeerController.listbeers);
router.get("/random", BeerController.random);
router.post("/", userValidationRules(), validate, BeerController.addbeer);

module.exports = router;
