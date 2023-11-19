const mongoose=require("mongoose")
 const zapatillasModel=mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    marca:{
        type:String,
        require:true
    },
    genero:{
        type:String,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    descripcion:{
        type:String,
        require:false
    },
    cantidad_dispo:{
        type: Number,
        require:true
    }
 });

 module.exports= mongoose.model("zapatillas",zapatillasModel)