let {db} = require("./config/index")
let knex = require('knex')

//crea la conexion
let mysql = knex ({
    client: 'mysql',
    connection: {
        host: db.host,
        user: db.user,
        password: db.password,
        database: db.database
    },
    //limita el num de conexiones
    pool: { min: 0, max: 7 }
})

//  Database.client = sqlite;
let sqlite = knex({
    client:'sqlite3',
    connection: {filename: '/.config/dbClase16.sqlite'}
})

//singleton: si existe me genera cliente,sino cliente es igual a la conexion sql
class Database{
    static client;
    constructor(){
        if(Database.client){
            return Database.client;
        }
        Database.client = sqlite;
        this.client = Database.client;
    }
}

module.exports = new Database();