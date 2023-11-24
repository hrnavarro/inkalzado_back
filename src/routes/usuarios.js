const express=require("express");
const usuariosModel=require("../models/usuarios");
const router=express.Router();

//get
router.get("../usuarios",(req,res)=>(usuariosModel.find()
.then((data)=>(res.json(data)))
))
//post
router.post("../usuarios",(req,res)=>(usuariosModel(req.body)
.save()
.then((data)=>res.json(data))
.catch((error)=>res.json({message: error}))
))

//put 
router.put("../usuarios/:username",(req,res)=>{
    const {username}=(req.params);
    const {contraseña,correo}=req.body;
    usuariosModel.updateOne({_id:id},{contraseña,username,correo})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
})

//delete
router.delete("../usuarios",(req,res)=(usuariosModel(req.params)
.remove({username})
.then((data)=>res.json(data))
.catch((error)=>res.json({message: error}))
))

module.exports=router