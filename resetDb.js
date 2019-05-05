const {db} = require('./model');

const resetDb = async()=>{
  try{
    await db.sync({force:true});
    console.log('db synced')
  }catch(e){
    console.log(e)
  }finally{
    await process.exit();
  }
}

resetDb();