const Sequelize = require('sequelize');

const db = new Sequelize({
  database:"birdDb",
  dialect:"postgres",
  define:{
    underscored:true
  }
})

const BirdTable = db.define('bird',{
  style: {
    type:Sequelize.STRING,
    allowNull:false
  },
  city: {
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  } 
})

module.exports = {
  db,
  BirdTable
}