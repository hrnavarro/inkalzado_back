const express=require("express");
const zapatillasModel=require("../models/zapatillas");
const router= express.Router();


/** 
 * @swagger
 * component:
 * schema:
 * zapatillas
 * type:object
 * properties:
 * marca:
 * type.string
 * descripcion :marca del producto
 * genero:
 * type:stting
 * desccripcion: para hombre o mujer 
 * precio:
 * type:integer
 * desccripcion: precio del producto
 * cantidad:
 * type:integer
 * 
 * nombre:
 * typr:string 
 * decripcion : nombre de las zapatillas,
 * 
*/

//get
router.get("/zapatillas",(req,res)=>(zapatillasModel.find()
    .then((data)=>res.json(data))
    
    ))
   
//post
router.post("/zapatillas",(req,res)=>{
    const zapatilas= zapatillasModel(req,body);
    zapatilas.save()
    .then((data)=>res.json({mensaje:"compra realizada"}))
    .catch((error)=>res.json({mensaje:"error"}))
})

//delete

router.delete("/zapatillas",(req,res)=>{
    const zapatilas=(req.params);
    zapatilas.remove()
    .then((data)=>res.json({mensaje:"compra realizada"}))
    .catch((error)=>res.json({mensaje:"error"}))
})

module.exports=router