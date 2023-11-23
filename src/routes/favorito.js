const express=require("express");
const router=express.Router();
const favoritoModel=require('../models/favorito');
const zapatillasModel=require('../models/zapatillas');

router.get('/usuarios/:id',(req,res)=>{
    const usuariosId=req.params.id;
    const fav=favorito.findOne({usuario:usuariosId}).populate('zapatillas');
    res.json(fav||{usuario:usuariosId, zapatillas:[] });
});

router.post('/añadir',(req,res)=>{
    const{usuario,zapatillaId}=req.body;
    const zapatilla=Zapatilla.findById(zapatillaId);

    const fav_exist= Fav.findOne({usuario});
    if(fav_exist){
        if(!fav_exist.zapatillas.incluides(zapatillaId)){
            fav_exist.zapatilla.push(zapatillaId);
            fav_exist.save();
        }
    }else{
        const nw_fav=new fav({
            usuario,zapatilla:[zapatillaId]
        });
        nw_fav.save();
    }
    res.json({mensaje:"Zapatilla agregada a favoritos con exito"});
    

});
module.exports=router