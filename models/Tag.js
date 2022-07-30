const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Tag extends Model {}

Tag.init({
    // add properites here, ex:
  tag_name:{
    type:DataTypes.STRING,
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

module.exports=Tag