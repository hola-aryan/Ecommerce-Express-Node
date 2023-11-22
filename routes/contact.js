const path = require('path');

const express = require('express');

const contactController = require('../controller/contact')

const router = express.Router();

router.get('/contact', contactController.getContacts);

module.exports = router;
