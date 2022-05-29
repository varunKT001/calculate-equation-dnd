const router = require('express').Router();
const mainController = require('../controllers/mainController');

router.route('/get-alphabets').get(mainController.getAllAlphabets);

module.exports = router;
