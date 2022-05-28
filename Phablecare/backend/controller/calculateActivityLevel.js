let calculateActivityLevelService = require('../service/calculateActivityLevel');

let calculateActivityLevel = (req,res) => {
    calculateActivityLevelService.calculateActivityLevelService(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

module.exports = { calculateActivityLevel }