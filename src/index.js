//llamar paquetes
const express= require("express")
const mongoose=require("mongoose")

require("dotenv").config()
const zapatillas= require("./routes/carrito_compra")

//Definicion de configuraciones
const app=express()
const puerto = 7000;
app.use(express.json());
//middleware


//rutas
app.get("/",(req,res)=>{res.send("probando puerto")})
app.use("/api",zapatillas)


//Ejecucion
mongoose.connect("mongodb+srv://hrodrigueznavarro62:nqbRN3kbM3OXO6C2@cluster0.bqagj5g.mongodb.net/inkalzado?retryWrites=true&w=majority")
.then(() => {console.log("conexion con exito siuu")})
.catch((error)=>{console.log("no hay noexion")})

app.listen(puerto,()=>{console.log("puerto en "+puerto)})