const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class ProductTag extends Model {}

ProductTag.init({
  product_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  tag_id:{
    type:DataTypes.INTEGER,
  }
},{
    sequelize,
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,4)
    //     }
    // }
});

module.exports=ProductTag