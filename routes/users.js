const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");


router.get("/", controller.getAll);

router.get("/:_id", controller.getSpecific);

router.post("/", controller.createUser);

router.patch("/:_id", controller.edit);

module.exports = router;
