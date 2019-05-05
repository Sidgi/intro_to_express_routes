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
     const bird = await BirdTable.findByPk(req.params.id);
     res.send(bird);
  }catch(e){
    res.status(404).json({message:e.message})
  }
})
const birdsInHtml = async (birds)=>{
  const penguins = await birds.map(bird=>`<h1 style='text-align:center'>${bird.style}</h1>`)
  return penguins.join(' ');
}
app.get('/',async(req,res)=>{
  try{
    const birds =  await BirdTable.findAll();
    const array = await birdsInHtml(birds)
    res.send(array)
  }catch(e){
    res.status(404).json({message:e.message})
  }
})
app.get('/:id', async(req,res)=>{
  try{
    const id = req.params.id;
    const bird = await BirdTable.findByPk(id);
    res.send(`<h1 style='text-align:center'>${bird.style}</h1>`)
  }catch(e){
    console.log(e.message)
  }
})
app.get('/cities/:name',async(req,res)=>{
  try{
    const city = await BirdTable.findAll({
      where:{
        city: req.params.name
      }
    })
    res.json(city)
  }catch(e){
    console.log(e.message)
  }
})
app.listen(PORT,()=>console.log( `listen on ${PORT} port`));
