const express = require('express');
const app = express();
const {BirdTable} = require('./model');
const PORT = 8080;
app.get('/birds.json',async(req,res)=>{
  try{
    const allBirds = await BirdTable.findAll();
    res.json(allBirds);
  }catch(e){
    res.status(404).json({message:e.message});
  }
})
app.get('/birds/:id.json',async(req,res)=>{
  try{
    console.log(req.params.id)
    // const bird = await BirdTable.findByPk(req.params.id)
    const bird = await BirdTable.findAll({
      where:{
        id:req.params.id
      }
    })
    res.send(bird[0])
  }catch(e){
    res.status(404).json({message:e.message})
  }
})
app.listen(PORT,()=>console.log( `listen on ${PORT} port`));
