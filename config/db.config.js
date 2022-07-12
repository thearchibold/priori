const config = require("./config")
console.log(process.env.NODE_ENV)
module.exports = {
    HOST: config[process.env.NODE_ENV].host,
    USER: config[process.env.NODE_ENV].username,
    PASSWORD: config[process.env.NODE_ENV].password,
    DB: config[process.env.NODE_ENV].database,
    dialect: config[process.env.NODE_ENV].dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
