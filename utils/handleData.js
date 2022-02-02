const db_obj = require("./config/db");
let db = db_obj.client;



class Handle {
    //crear tabla
    async createTabla () {
        try {
            await db.schema.createTable("articulos", table =>{
                table.increments("id").primary(),
                table.string("nombre"),
                table.float("precio"),
                table.integer("stock")
            })
        } catch (error) {
            console.log(error)
        }
    };
    
    //insertar data dentro de tabla
    async  updateTabla () {
        try {
            let data = [
                {
                    nombre: "televisor",
                    codigo: "cd123",
                    precio: "12.5",
                    stock: 10
                },
                {   nombre: "Monitor LG",
                    codigo: "cd87123",
                    precio: "842.5",
                    stock: 50
                }
            ];
    
            let response = await db.from("articulos").insert(data);
            console.log(response);
    
        } catch (error) {
            console.log(error)
        }
    };
    
    //leer data
    async returnData () {
        try {
            let response = await db.from("articulos");
            JSON.parse(response);
            
        } catch (error) {
            console.log(error)
        }
    };
    
    //random
    async returnRandom () {
        try {
            let num = (Math.floor(Math.random() * 5) + 1) ;
            //leer data
            let response = await db.from("articulos").where({id:`${num}`});
            JSON.parse(response);
    
        } catch (error) {
            console.log(error)
        }
    };
    
}

module.exports = new Handle ();