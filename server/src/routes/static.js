const express = require("express");
const router = expressRouter();
const staticController = require("../controller/staticController");

router.get("/", staticController.index);

module.exports = router;