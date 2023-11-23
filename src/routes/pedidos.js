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
 * decripcion : nombre de las zapatillas
 * 
*/

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

<<<<<<< HEAD:src/routes/carrito_compra.js
router.delete("/zapatillas",(req,res)=>{
    const zapatilas=(req.params);
=======
router.delete("/pedido",(req,res)=>{
    const zapatilas=(req.param);
>>>>>>> da92a93f2e5400c7b7a6d915d75258c08d102bb1:src/routes/pedidos.js
    zapatilas.remove()
})

module.exports=router