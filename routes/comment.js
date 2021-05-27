const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/comment', ctrl.pattern.index);


router.post('/', ctrl.comment.postComment);

module.exports = router;