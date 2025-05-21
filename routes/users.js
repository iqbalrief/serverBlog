var express = require('express');
var router = express.Router();


const authCtrl = require('../controller/users');

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);


module.exports = router;
