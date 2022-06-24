// 2. Create Database Connection

const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "aims@101289",
    database: "postgres"
})

module.exports = client
