const express = require('express');
const router = express.Router();
const {Product, Category, Tag, ProductTag} = require('../models');

router.get("/",async (req,res)=>{
    try {
        const categorys = await Category.findAll({
            // make sure associations are correct
            include:[Category,ProductTag],
            include:[{
                model:ProductTag,
                include:[Tag]
            }]
        })
        res.status(200).json(categorys)
    } catch (err) {
        res.status(500).json({
            msg:"internal server error!",
            err
        })
    }
})

router.post("/",async (req,res)=>{
    try{
        const newCategory = await Category.create({
            category_name:req.body.category_name,
            id:req.body.id
        })
        res.status(201).json(newCategory)
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"internal server error!",
            err
        })
    }
})


router.get("/:id",(req,res)=>{
    Product.findByPk(req.params.id).then(category=>{
        if(!category){
            return res.status(404).json({msg:"No Such Category exists in the Database!"})
        }
        res.json(category)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})
router.put("/:id",(req,res)=>{
    Category.update({
        category_name:req.body.category_name
    },
        {
        where:{
            id:req.params.id
        }
        }).then(category=>{
            if(!category[0]){
                return res.status(404).json({msg:"No such Category Exists or Change Not Made!"})
            }
        res.json(category)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})
router.delete("/:id",(req,res)=>{
    Category.destroy({
        where:{
            id:req.params.id
        }
        }).then(category=>{
            if(!category){
                return res.status(404).json({msg:"No such Category Exists"})
            }
        res.json(category)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})

module.exports = router;