const express=require("express")
const zapatillasModel=require("../models/zapatillas");
const router= express.Router();

//get
router.get("/zapatillas",(req,res)=>(zapatillasModel.find()
    .then((data)=>res.json(data))
    
    ))
//post

//put

//delete

module.exports=router