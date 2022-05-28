let activityLevel = require('../constants/const').systemConstants.activityLevel;


let activityLevelService = (req,res) => {
    return new Promise((resolve,reject) => {
        resolve(activityLevel);
    })
}




module.exports =  { activityLevelService }