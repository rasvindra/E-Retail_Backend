const express = require('express');
const router = express.Router();
const productRoutes = require("./product-routes")
const categoryRoutes = require("./category-routes")
const tagRoutes = require("./tag-routes")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/Products",productRoutes)
router.use("/api/Categorys",categoryRoutes)
router.use("/api/Tags",tagRoutes)

module.exports = router;