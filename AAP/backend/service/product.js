const filePath = require('../constant').systemConstants.filePath;
const fs = require('fs');

let productService = (req,res) => {
    return new Promise((resolve,reject) => {
        let data =  JSON.parse(fs.readFileSync(filePath));
        if(data){
            resolve(data);
        }else{
            reject("Data Not Found");
        }
    })
}




module.exports =  { productService }