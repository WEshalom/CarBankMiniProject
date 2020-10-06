const express = require('express')
const getController = require('../controllers/get_controller')

const router = express.Router();

router.get('/', getController.getGets);
router.get('/db', getController.getGetsFromDB);

module.exports = router;
