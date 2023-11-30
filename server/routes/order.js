const { json } = require('express');
const Order = require('../models/Order');
const { verifyToken, verifyAndAuth, verifyAdmin } = require('./verifyToken');

const router= require('express').Router();

router.post('/', verifyToken, async(req,res)=>{
    const newOrder=new Order(req.body);

     try {
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder)
     } catch (error) {
        res.status(500).json(error)
     }

})

router.put('/:id',verifyAdmin, async(req,res)=>{
        try {
              const updatedOrder= await Order.findByIdAndUpdate(req.params.id, {
                $set:req.body,
              },{new:true});
              res.status(200).json(updatedOrder);  
        } catch (error) {
                res.status(500).json(error)
        }
})

router.delete('/:id', verifyAdmin, async(req,res)=>{
        try{
                await Order.findByIdAndDelete(req.params.id);
                res.status(200).json("Order deleted")
        }catch(error){
                res.status(500).json(error);
        }
})

//get user order
router.get('/find/:userId', verifyAndAuth , async(req,res)=>{
        try{
                const orders=await Order.find({userId:req.params.userId});
                res.status(200).json(orders)
        }catch(error){
                res.status(500).json(error);
        }
});

router.get('/',verifyAdmin,  async(req,res)=>{
     try {
        const orders=await Order.find()
        res.status(200).json(orders)
     } catch (error) {
        res.status(500).json(error)
     }
});


module.exports=router;