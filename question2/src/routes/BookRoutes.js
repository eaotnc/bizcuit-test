const express = require("express");
const router = express.Router();
const BookController = require("./../controller/BookController");

router.get("/list", BookController.listBooks);
router.post("/addBeers", BookController.addBooks);
router.delete("/delete", BookController.deleteBooks);

module.exports = router;
