
const express = require('express')
// 
const contactUsController = require('../controllers/contactUS')
const router = express.Router()

router.get('/contact-us',contactUsController.getContactUs);

router.post('/success',contactUsController.getSuccess)

module.exports = router;