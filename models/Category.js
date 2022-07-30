const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

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
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,4)
    //     }
    // }
});

module.exports=Category