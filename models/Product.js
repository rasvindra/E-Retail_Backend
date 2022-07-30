const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Product extends Model {}

Product.init({
  product_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:DataTypes.DECIMAL,
    allowNull:false,
    unique:true,
    validate:{
        isDecimal:true
    }
  },
  stock:{
    type:DataTypes.INTEGER,
    allowNull:false,
    default:10,
    validate:{
        isNumeric:true
    }
  },
  catergory_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    default:10,
    validate:{
        isNumeric:true
    }
  }
},{
    sequelize,
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,4)
    //     }
    // }
});

module.exports=Product