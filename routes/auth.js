const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/login', ctrl.auth.login);
router.get('/signup', ctrl.auth.signup);

router.post('/', ctrl.auth.postSignup);
router.post('/login', ctrl.auth.postLogin);

router.put('/edit', ctrl.auth.editMember);

module.exports = router;