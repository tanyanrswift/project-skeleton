const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");
const List = require("../../src/db/models").List;


router.get("/api/lists", listController.index);
// router.get("/api/lists/:id", listController.show);
// router.get("/api/lists/new", listController.new);
// router.get("/api/lists/:id/edit", listController.edit);

// router.post("/api/lists/create", listController.create);
// router.post("/lists/:id/destroy", listController.destroy);
// router.post("/api/lists/:id/update", listController.update);

module.exports = router;