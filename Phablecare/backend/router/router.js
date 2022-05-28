let express = require('express');
const { activityLevel } = require('../controller/activityLevel');
const { calculateActivityLevel } = require('../controller/calculateActivityLevel');
let router = express();

router.get('/activityLevel',activityLevel);
router.post('/calculateActivityLevel',calculateActivityLevel)

module.exports = router