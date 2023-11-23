const express=require("express")
const zapatillasModel=require("../models/zapatillas");
const router= express.Router();

//get
router.get("/pedido",(req,res)=>(zapatillasModel.find()
    .then((data)=>res.json(data))
    
    ))
   
//post
router.post("/pedido",(req,res)=>{
    const zapatilas= zapatillasModel(req,body);
    zapatilas.save()
    .then((data)=>res.json({mensaje:"compra realizada"}))
    .catch((error)=>res.json({mensaje:"error"}))
})

//delete

router.delete("/pedido",(req,res)=>{
    const zapatilas=(req.param);
    zapatilas.remove()
})

module.exports=router