const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.pattern.index);
router.get('/pattern/create', ctrl.pattern.renderNew);
router.get('/pattern/:index/:index', ctrl.pattern.showPattern);
router.get('/pattern/:index/:index/edit', ctrl.pattern.renderEdit);

router.post('/', ctrl.pattern.postNew);

router.put('/pattern/:index/:index', ctrl.pattern.postEdit);

router.delete('/pattern/:index/:index', ctrl.pattern.deletePattern);

module.exports = router;
