const mongoose=require("mongoose")
const carritoModel=mongoose.Schema({
    usuarios:{
        type:String,
        require:true
    },
    zapatilla:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    }
});
module.exports=mongoose.model("carrito",carritoModel)