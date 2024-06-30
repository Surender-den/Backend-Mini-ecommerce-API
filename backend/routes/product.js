const express = require('express');
const { getproducts, singleproducts } = require('../controllers/product.controller');
const router =express.Router();

router.route('/products').get(getproducts);
router.route('/products/:id').get(singleproducts);

module.exports = router;

