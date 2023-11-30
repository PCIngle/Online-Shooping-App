const { json } = require('express');
const Customer = require('../models/Customer');
const { verifyToken, verifyAndAuth, verifyAdmin } = require('./verifyToken');

const router= require('express').Router();


router.put('/:id',verifyAndAuth, async(req,res)=>{
        if(req.body.password){
               req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        }

        try {
              const updateUser= await Customer.findByIdAndUpdate(req.params.id, {
                $set:req.body,
              },{new:true});
              res.status(200).json(updateUser)  
        } catch (error) {
                res.status(500).json(error)
        }
})

router.delete('/:id', verifyAndAuth, async(req,res)=>{
        try{
                await Customer.findByIdAndDelete(req.params.id);
                res.status(200).json("User deleted")
        }catch(error){
                res.status(500).json(error);
        }
})

router.get('/find/:id', verifyAdmin, async(req,res)=>{
        try{
                const user=await Customer.findById(req.params.id);
                const {password, ...others}=user._doc
                res.status(200).json(others)
        }catch(error){
                res.status(500).json(error);
        }
});

router.get('/', verifyAdmin, async(req,res)=>{
       // const query=req.query.new;
        try{
                const users=await Customer.find()
                res.status(200).json(users)
        }catch(error){
                res.status(500).json(error);
        }
});

module.exports=router;