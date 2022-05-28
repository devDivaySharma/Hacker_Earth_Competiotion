let express = require('express');
let router = express();
let userContoller = require('../controller/userController');
let courseContoller = require('../controller/courseController');

router.get('/courses',courseContoller.course);

router.get('/user/courses',);

router.post('/login',userContoller.userLogin);

router.post('/register',userContoller.userRegister);

module.exports = router 