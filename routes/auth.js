const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/login', ctrl.auth.login);
router.get('/signup', ctrl.auth.signup);

router.get('/logout', ctrl.auth.logout);

router.post('/', ctrl.auth.postSignup);
router.post('/login', ctrl.auth.postLogin);


module.exports = router;