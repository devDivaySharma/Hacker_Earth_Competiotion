let userService = require('../services/userService');

let userLogin = (req,res) => {
    userService.login(req,res).then((result) => {
        console.log('controller',result);
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

let userRegister = (req,res) => {
    userService.register(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

let user = (req,res) => {
    userService.user(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

module.exports = { userRegister,userLogin,user }