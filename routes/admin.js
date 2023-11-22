const path = require('path');

const express = require('express');

const productController = require('../controller/products')
const contactController = require('../controller/contact')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

router.get('/contact', contactController.getContacts);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
