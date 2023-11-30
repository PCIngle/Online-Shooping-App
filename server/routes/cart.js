const { json } = require('express');
const Cart = require('../models/Cart');
const { verifyToken, verifyAndAuth, verifyAdmin } = require('./verifyToken');

const router= require('express').Router();

router.post('/', verifyToken, async(req,res)=>{
    const newCart=new Cart(req.body)

     try {
        const savedCart=await newCart.save();
        res.status(200).json(savedCart)
     } catch (error) {
        res.status(500).json(error)
     }

})

router.put('/:id',verifyAndAuth, async(req,res)=>{
        try {
              const updatedCart= await Cart.findByIdAndUpdate(req.params.id, {
                $set:req.body,
              },{new:true});
              res.status(200).json(updatedCart);  
        } catch (error) {
                res.status(500).json(error)
        }
})

router.delete('/:id', verifyAndAuth, async(req,res)=>{
        try{
                await Cart.findByIdAndDelete(req.params.id);
                res.status(200).json("Cart deleted")
        }catch(error){
                res.status(500).json(error);
        }
})

//get user cart
router.get('/find/:userId', verifyAndAuth , async(req,res)=>{
        try{
                const cart=await Cart.findOne({userId:req.params.userId});
                res.status(200).json(cart)
        }catch(error){
                res.status(500).json(error);
        }
});

router.get('/',verifyAdmin,  async(req,res)=>{
     try {
        const carts=await Cart.find()
        res.status(200).json(carts)
     } catch (error) {
        res.status(500).json(error)
     }
});


module.exports=router;