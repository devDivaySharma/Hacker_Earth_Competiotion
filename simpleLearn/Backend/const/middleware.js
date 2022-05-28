let jwt = require('jsonwebtoken');
let key = require('./const').systemConstants;


const createJwtToken = (user) => {
    return new Promise((resolve,reject) => {
        let token =  jwt.sign(user,key.secretKey);
        if(token){
            resolve(token);
        }else{
            reject(null);
        }
    })
}

const verifyJwt = (token) => {
    return new Promise((resolve,reject) => {
        let user =  jwt.verify(token,key.secretKey);
        if(user){
            resolve(user);
        }else{
            reject(null);
        }  
    });
}

module.exports = { createJwtToken ,verifyJwt }