let activityLevelService = require('../service/activityLevel');

let activityLevel = (req,res) => {
    activityLevelService.activityLevelService(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

module.exports = { activityLevel }