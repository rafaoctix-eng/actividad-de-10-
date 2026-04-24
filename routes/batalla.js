const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/batallaController');

router.post('/', ctrl.batalla);

module.exports = router;