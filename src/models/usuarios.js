const mongoose= require("mongoose")


const usuariosModel=mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:false
    },
    correo:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    contraseña:{
        type:String,
        require:true
    }
});

module.exports= mongoose.model("usuarios",usuariosModel)