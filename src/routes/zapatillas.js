const express=require("express");
const zapatillasModel=require("../models/zapatillas");
const router= express.Router();

const {nombre,marca}=req.query;
const filtro=[];

if (nombre){filtro.nombre={$regex: new RegExp(nombre,'1')}}
if(marca){filtro.marca={$regex:new RegExp(marca,1)}}

router.get((req,res)=>(zapatillasModel.find(filtro)))
.then((data)=>res.json(data))
.catch((error)=>res.json({message: error}));

module.exports=router;
