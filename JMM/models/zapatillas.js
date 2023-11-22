const mongoose= require("mongoose")


const zapatillasmodel = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    genero: {
        type:String,
        required:true
    },
    precio :{
        type:Number,
        required:true
    },
    nombre :{
        type:Number,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    talla:{
        type:Number,
        riquerid:true
    },
    

})

module.exports = mongoose.model("zapatillas",zapatillasmodel);