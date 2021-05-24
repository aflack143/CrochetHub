const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
const ctrl = require('../controllers');

router.get('/', ctrl.pattern.index);
router.get('/pattern/create', ctrl.pattern.renderNew);
router.get('/pattern/:index/:index', ctrl.pattern.showPattern);
router.get('/pattern/:index/:index/edit', ctrl.pattern.renderEdit);

router.post('/pattern', ctrl.pattern.postNew);

router.put('/pattern/:index/:index', ctrl.pattern.postEdit);

router.delete('/pattern/:index/:index', ctrl.pattern.deletePattern);

module.exports = router;
