let middleware = require('../const/middleware');


let login = (req,res) => {
    return new Promise((resolve,reject) => {
        if(req.body){
            let token = middleware.createJwtToken(req.body);
            if(token != null){
                console.log('token',token);
                resolve(token)
            }else{
                reject('Sorry unable to login');
            }
        }
    })
}

let register = (req,res) => {
    return new Promise((resolve,reject) => {
        if(req.body){
            resolve('User Registered Successfully');
        }else{
            reject('Unable to register user. Please try again later');
        }
    })
}

let user = (req,res) => {
    return new Promise((resolve,reject) => {
        
    })
}


module.exports =  { login, register, user }