const express = require("express");
const router = express.Router();
const beerController = require("../controller/beerController");
const { userValidationRules, validate } = require("../validator/beerValidator");

router.get("/list", beerController.listbeers);
router.get("/random", beerController.random);
router.post("/", userValidationRules(), validate, beerController.addbeer);

module.exports = router;
