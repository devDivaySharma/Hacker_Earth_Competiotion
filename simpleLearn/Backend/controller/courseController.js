let courseService = require('../services/courseService');

let course = (req,res) => {
    courseService.courses(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

module.exports = { course }