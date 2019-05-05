const data = require('./data');
const {BirdTable} = require('./model');

const seedTable = async()=>{
  try{
    const a = data.length;
    const seeded = await BirdTable.bulkCreate(data);
    console.log(a)
  }catch(e){
    console.log(e)
  }finally{
    await process.exit();
  }
}

seedTable();
