const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init({
    // add properites here, ex:
  tag_name:{
    type:DataTypes.STRING,
    },
},
{
    sequelize,

});

module.exports=Tag