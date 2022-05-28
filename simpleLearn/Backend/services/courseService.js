let url = require('../const/const').systemConstants
let axios = require('axios');

let courses = () => {
    return new Promise((resolve,reject) => {
        axios.default.get(url.courseUrl).then((data) => {
            if(data.status == 200){
                resolve(data.data);
            }else{
                reject(data);
            }
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports =  { courses }