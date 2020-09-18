const express = require('express'),
router = express.Router()

const langController = require('../controllers/langControllers')

router.get('/show_lang', langController.show_lang)
router.post('/show_lang', langController.show_lang_tip)

module.exports = router