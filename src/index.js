//llamar paquetes
const express= require("express")
const mongoose=require("mongoose");
const pedidos = require("./routes/pedidos");
const usuarios = require("./models/usuarios");
require("dotenv").config()

//Definicion de configuraciones
const app=express()
const puerto = 7000;
app.use(express.json());
//middleware


//rutas
app.get("/inkalzado",(req,res)=>{res.send("conectado al puerto")})
app.use("/usuarios",usuarios)
app.use("/",)


//Ejecucion
mongoose.connect("mongodb+srv://hrodrigueznavarro62:nqbRN3kbM3OXO6C2@cluster0.bqagj5g.mongodb.net/inkalzado?retryWrites=true&w=majority")
.then(() => {console.log("conexion con exito ")})
.catch((error)=>{console.log("no hay conexion")})

app.listen(puerto,()=>{console.log("puerto en "+puerto)})