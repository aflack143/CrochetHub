const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:index', ctrl.member.showMember);
router.get('/profile/:index/edit', ctrl.member.renderEdit);

router.put('/profile/:index', ctrl.member.editMember);

router.delete('/profile/:index', ctrl.member.deleteMember);

module.exports = router;