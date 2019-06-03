const express = require("express");
const router = express.Router();
//const User = require('./models/User');
const userController = require('../controllers/userController');

router.get('/api/users', userController.find);
router.get('/api/users/:id', userController.findOne);
router.post('/api/users', userController.create);

module.exports = router;