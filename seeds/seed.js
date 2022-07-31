require("dotenv").config();
const sequelize = require("../config/connection");
const {Product,Category,Tag} = require("../models");

const productObj = [
    {
        product_name:"Socks",
        price: 12.95,
        stock: 7,
        category_id: 1
    },
    {
        product_name:"Boxers",
        price: 20.99,
        stock: 4,
        category_id: 2
    },
    {
        product_name:"Shirts",
        price: 17.50,
        stock: 6,
        category_id: 3
    },
    {
        product_name:"Sunglasses",
        price: 150.00,
        stock: 3,
        category_id: 4
    },
    {
        product_name:"Watch",
        price: 250.00,
        stock: 2,
        category_id: 5
    }
]


const categoryObj = [
    {
        category_name:"Undergarments",
    },
    {
        category_name:"Accessories",
    }
]

const tagObj = [
    {
        tag_name:"What is this for?",
    },
    {
        tag_name:"Another Model just for fun?",
    }
]


const seedMe = async ()=>{
    await sequelize.sync({force:true});
    const products = await Product.bulkCreate(productObj);
    const categorys = await Category.bulkCreate(categoryObj);
    const tags = await Tag.bulkCreate(tagObj); 
    console.log("Data Succesfully Seeded!");
    process.exit(0);
}

seedMe();