//llamar paquetes
const express= require("express")
<<<<<<< HEAD
const mongoose=require("mongoose")
require("dotenv").config()
const zapatillas = require("./routes/carrito_compra")
const usuarios= require("./routes/usuarios")
const swaggerJSDoc = require ("swaggerjsdoc")
const swaggerUI=require("swagger-ui-express")
const path= require("path")
=======
const mongoose=require("mongoose");
const pedidos = require("./routes/pedidos");
const usuarios = require("./models/usuarios");
require("dotenv").config()
>>>>>>> da92a93f2e5400c7b7a6d915d75258c08d102bb1

//Definicion de configuraciones
const app=express();
const puerto = 7000;
app.use(express.json());
const swaggerconf={
    zapatillas:{
       openapi:"3.0.0",
       info : {
        titulo  : "documentomentacion de api de zapatillas",
         version:"1.0.0"
       },
       servers:[
        {
            url:"http://localhost:7000"
        }
       ]
    },
    apis:[ ` ${path.join(__dirname,"./routes/*.js")} ` ]
}
//middleware


//rutas

app.use("/api",zapatillas)
app.use("/api",usuarios)
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerconf)))
app.get("/inkalzado",(req,res)=>{res.send("conectado al puerto")})
app.use("/usuarios",usuarios)
app.use("/",)


//Ejecucion
mongoose.connect("mongodb+srv://hrodrigueznavarro62:nqbRN3kbM3OXO6C2@cluster0.bqagj5g.mongodb.net/inkalzado?retryWrites=true&w=majority")
.then(() => {console.log("conexion con exito ")})
.catch((error)=>{console.log("no hay conexion")})

app.listen(puerto,()=>{console.log("puerto en "+puerto)})