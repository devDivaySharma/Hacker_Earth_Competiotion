const systemConstants = {
    port: "8000",
    secretKey : "###@@@@@!!!!1234",
    activityLevel : ["sedentary","ligtly active","moderately active","very active","extra active"],
    activityLevelEnum : [{"sedentary":1.2},{"ligtly active":1.375},
    {"moderately active": 1.55},{"very active":1.752},{"extra active":1.9}]
}

module.exports = { systemConstants }