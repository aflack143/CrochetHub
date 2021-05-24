const express = require('express');
const router = express.Router();
const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
const ctrl = require('../controllers');

router.get('/', ctrl.pattern.index);
router.get('/pattern/create', ctrl.pattern.renderNew);
router.get('/pattern/:index/:index', ctrl.pattern.showPattern);

router.post('/pattern/:index/:index', ctrl.pattern.postNew);


router.delete('/', ctrl.pattern.deletePattern);

module.exports = router;
