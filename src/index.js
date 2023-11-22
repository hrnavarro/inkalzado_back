//llamar paquetes
const express= require("express")
const mongoose=require("mongoose")
require("dotenv").config()

//Definicion de configuraciones
const app=express()
const puerto = 7000;
//rutas


//Ejecucion
mongoose.connect(process.env.mongodb)

app.get("/inkalzado/express",(req,res)=>(res.send("Hello world")))

app.listen(puerto,()=>{console.log("servidor escuchando en el puerto"+puerto)});