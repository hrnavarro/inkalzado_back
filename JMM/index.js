//get
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const zapatillas = require("./router/zapatilas")

//configuaraciones 
const app =express();
const puerto = 7000 ;



//rutas
app.get("/productos", (req,res) => {res.send("armando primera pagina")})
app.get("/", (req,res) => {res.send("la pagina principal siuu")})
app.use("/api",zapatillas)

//ejecucion
mongoose.connect("mongodb+srv://hrodrigueznavarro62:nqbRN3kbM3OXO6C2@cluster0.bqagj5g.mongodb.net/inkalzado?retryWrites=true&w=majority")
.then(() => {console.log("conexion con exito siuu")})
.catch((error)=>{console.log("no hay noexion")})

app.listen(puerto,()=>{console.log("servidore en "+puerto)})