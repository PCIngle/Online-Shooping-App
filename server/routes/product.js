const { json } = require('express');
const Product = require('../models/Product');
const { verifyToken, verifyAndAuth, verifyAdmin } = require('./verifyToken');

const router= require('express').Router();

router.post('/', verifyAdmin, async(req,res)=>{
    const newProduct=new Product(req.body)

     try {
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct)
     } catch (error) {
        res.status(500).json(error)
     }

})

router.put('/:id',verifyAdmin, async(req,res)=>{
        try {
              const updatedProduct= await Product.findByIdAndUpdate(req.params.id, {
                $set:req.body,
              },{new:true});
              res.status(200).json(updatedProduct);  
        } catch (error) {
                res.status(500).json(error)
        }
})

router.delete('/:id', verifyAdmin, async(req,res)=>{
        try{
                await Product.findByIdAndDelete(req.params.id);
                res.status(200).json("Product deleted")
        }catch(error){
                res.status(500).json(error);
        }
})

router.get('/find/:id', async(req,res)=>{
        try{
                const product=await Product.findById(req.params.id);
                res.status(200).json(product)
        }catch(error){
                res.status(500).json(error);
        }
});

router.get('/',  async(req,res)=>{
        const qNew=req.query.new;
        const qCategory=req.query.qCategory;
        try{
                let products;
                if(qNew){
                        products=await Product.find().sort({createdAt:-1}).limit(1)
                }else if(qCategory){
                        products=await Product.find({
                                createdAt:{
                                        $in:[qCategory],
                                },
                        });
                }else{
                        products=await Product.find();
                }

                res.status(200).json(products)
        }catch(error){
                res.status(500).json(error);
        }
});


module.exports=router;