const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Registration route
router.post('/register', UserController.registerUser);

module.exports = router;
