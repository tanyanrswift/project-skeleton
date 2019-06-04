//this file is not required for a Resful API, because it is for static files such as images, html, etc, and this 
//will all be on our front end side in this type of application
//Keep for sanity/consistency

const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

module.exports = router;