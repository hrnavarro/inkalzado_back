const express=require("express")
const zapatillasModel=require("../models/zapatillas");
const router= express.Router();

//get
router.get("/zapatillas",(req,res)=>(zapatillasModel.find()
    .then((data)=>res.json(data))
    
    ))




   //getby,id
   router.get("/zapatillas/:id",(req,res)=>{
    const zapatilas= zapatillasModel(req,body);
    zapatilas.save()
    .then((data)=>res.json({mensaje:"compra realizada"}))
    .catch((error)=>res.json({mensaje:"error"}))
})   
   

//post
router.post("/zapatillas",(req,res)=>{
    const zapatilas= zapatillasModel(req,body);
    zapatilas.save()
    .then((data)=>res.json({mensaje:"compra realizada"}))
    .catch((error)=>res.json({mensaje:"error"}))
})



//put

//delete

module.exports=router