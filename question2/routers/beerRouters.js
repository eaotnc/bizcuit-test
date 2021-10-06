import express from "express";
import beerController from "./controller/beerController.js";
const router = express.Router();

router.get("/list", () => console.log("helloworld"));
router.post("/add", () => console.log("helloworld"));
router.delete("/delete", () => console.log("helloworld"));

export default router;
