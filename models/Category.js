const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
    // add properites here, ex:
  category_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
},
{
    sequelize,
});

module.exports=Category