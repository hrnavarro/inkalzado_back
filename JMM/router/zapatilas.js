const express = require("express")
const zapatillasmodel = require("../models/zapatillas");

const router = express.Router();


//get
router.get("/zapatillas" ,( req,res )=> {
    zapatillasmodel.find()
    .then((data) => res. json(data))
    .catch((error) => res.json({Error:error}))
});


//post
router.post("/zapatillas",(req,res)=> {
    const zapatilas =zapatillasmodel(req,body);
    zapatilas.save()
    .then((date)=>res.json({respuest:"objeto guardado"}))
    .catch((error)=> res.json({resput:"algo no salio bien"}))
})

//put

//delete
router.delete("/zapatillas/:id",(req,res)=>{
    const{id}=req.params;
    zapatillasmodel.deleteone({_id:id})
    .then((data)=> res.json({pestuesta:"producto eliminado"}))
    .catch((error)=> res.json({pestuesta:"error"}))
})


module.exports= router;