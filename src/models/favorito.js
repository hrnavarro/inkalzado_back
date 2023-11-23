const mongoose=require("mongoose");
const zapatillas = require("./zapatillas");
const favoritoModel=mongoose.Schema({
    usuario:{
        type:String,
        require:true
    },
    zapatilla:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'zapatillas'}]
});
module.exports=mongoose.model("favoritos",favoritoModel)