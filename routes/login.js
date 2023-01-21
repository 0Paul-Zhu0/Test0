//js
const express = require('express');
const {homeView } = require('../controllers/loginController');
const router = express.Router();
router.get('/', homeView);

module.exports = router;