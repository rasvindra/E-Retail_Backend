const express = require('express');
const router = express.Router();
const {Product, Category, Tag, ProductTag} = require('../models');

router.get("/",async (req,res)=>{
    try {
        const tags = await Tag.findAll({
            // make sure associations are correct
            include:[Category,Product],
        })
        res.status(200).json(tags)
    } catch (err) {
        res.status(500).json({
            msg:"internal server error!",
            err
        })
    }
})

router.post("/",async (req,res)=>{
    try{
        const newTag = await Tag.create({
            tag_name:req.body.tag_name,
            id:req.body.id
        })
        res.status(201).json(newTag)
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"internal server error!",
            err
        })
    }
})


router.get("/:id",(req,res)=>{
    Tag.findByPk(req.params.id).then(tag=>{
        if(!tag){
            return res.status(404).json({msg:"No Such Tag exists in the Database!"})
        }
        res.json(tag)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})
router.put("/:id",(req,res)=>{
    Tag.update({
        tag_name:req.body.tag_name
    },
        {
        where:{
            id:req.params.id
        }
        }).then(tag=>{
            if(!tag[0]){
                return res.status(404).json({msg:"No such Tag Exists or the Change was Not Made!"})
            }
        res.json(tag)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})
router.delete("/:id",(req,res)=>{
    Tag.destroy({
        where:{
            id:req.params.id
        }
        }).then(tag=>{
            if(!tag){
                return res.status(404).json({msg:"No such Tag Exists"})
            }
        res.json(tag)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error",
            err
        })
    })
})

module.exports = router;