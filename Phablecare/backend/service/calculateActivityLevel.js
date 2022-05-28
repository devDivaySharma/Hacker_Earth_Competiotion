import { systemConstants } from '../constants/const'

let calculateActivityLevelService = (req,res) => {
    let bmr  = 0;
    let tdee = 0;
    let activityLevel = 0;
    return new Promise((resolve,reject) => {
        if((req.body.weight != undefined && req.body.weight != null) && 
        (req.body.bodyFat != undefined && req.body.bodyFat != null) && (req.body.activityLevel != undefined && req.body.activityLevel != null)){
           activityLevel = systemConstants.activityLevelEnum.filter((value) => {
                if(value.sedentary === req.body.activityLevel){
                    return value.sedentary.toFixed();
                }else if(value['ligtly active'] === req.body.activityLevel){
                    return value['ligtly active'].toFixed();
                }else if(value['very active'])
            })
            resolve(activityLevel);
        }else{
            reject('Sorry Something is missing');
        }
    })
}




module.exports =  { calculateActivityLevelService }