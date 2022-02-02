const express = require("express");
const app = express();
const cors = require("cors");
const {config} = require("./config");
const PORT = config.port;

let Handle = require("./utils/handleData");
let handle = new Handle();

//middlewares
app.use(cors(config.cors));

//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res,next)=>{
    res.send("<p style='color:blue;'>Server con express</p>")
})

app.get("/productos", async (req,res,next)=>{
    handle.createTabla();
    handle.updateTabla();
    handle.returnData().then(response => {
        res.send(response);
    }).catch(error =>{
        res.send(error);
    })
}); 

app.get("/productosRandom", (req,res,next)=>{
    handle.createTabla();
    handle.updateTabla();
    handle.returnRandom().then(response => {
        res.send(response);
    }).catch(error =>{
        res.send(error);
    })
});


app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})