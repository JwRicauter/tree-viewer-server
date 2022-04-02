const express = require('express');
const router = express.Router();
const treeController = require('../controllers/tree.js');

router.get('/children', treeController.getChildren);

module.exports = router;