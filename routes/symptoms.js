const express = require('express');
const router = express.Router();
const controller = require("../controllers/symptoms");


router.get("/", controller.getAll);

router.get("/:_id", controller.getSpecific);

router.post("/", controller.createSymptom);


module.exports = router;
