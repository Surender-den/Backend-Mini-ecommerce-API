const express = require('express');
const { createorders } = require('../controllers/order.controller');
const router = express.Router();

router.route('/orders').post(createorders)

module.exports = router;