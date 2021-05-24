const { captureRejectionSymbol } = require("events");
const mysql = require("mysql")
const { promisify } = require("util")

const { database } = require("./keys")

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        console.error("La DB no se pudo conctar")
    }

    if(connection) connection.release();
    console.log("La Base de Datos a sido conectada con exito")
    return;
})

pool.query = promisify(pool.query)

module.exports = pool;