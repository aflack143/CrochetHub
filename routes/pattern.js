const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
const ctrl = require('../controllers');

router.get('/', ctrl.pattern.index);
router.get('/create', ctrl.pattern.renderNew);
router.get('/:index/:index', ctrl.pattern.showPattern);
router.get('/:index/:index/edit', ctrl.pattern.renderEdit);

router.post('/', ctrl.pattern.postNew);

router.put('/:index/:index', ctrl.pattern.postEdit);

router.delete('/:index/:index', ctrl.pattern.deletePattern);

module.exports = router;
