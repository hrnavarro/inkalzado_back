//llamar paquetes
const express= require("express")
const mongoose=require("mongoose");
const zapatillas = require("./routes/carrito_compra");
require("dotenv").config()

//Definicion de configuraciones
const app=express()
const puerto = 3000;
//rutas
app.use("/api",zapatillas)

//Ejecucion
mongoose.connect("mongodb+srv://hrodrigueznavarro62:nqbRN3kbM3OXO6C2@cluster0.bqagj5g.mongodb.net/inkalzado?retryWrites=true&w=majority")

app.get("/inkalzado/express",(req,res)=>(res.send("Hello world")))

app.listen(puerto,()=>{console.log("servidor escuchando en el puerto"+puerto)});