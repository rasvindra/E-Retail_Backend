const express = require('express');
const router = express.Router();
const ProductRoutes = require("./Product-routes")
const CategoryRoutes = require("./Category-routes")
const TagRoutes = require("./Tag-routes")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/Products",ProductRoutes)
router.use("/api/Categorys",CategoryRoutes)
router.use("/api/Tags",TagRoutes)
router.use("/api/ProductTags",ProductTagRoutes)

module.exports = router;