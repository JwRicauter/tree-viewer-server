const express = require('express');
const router = express.Router();
const treeController = require('../controllers/tree.js');

router.get('/children', treeController.getChildren);
router.get('/childFile', treeController.childFile);

module.exports = router;