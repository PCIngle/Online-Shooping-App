const router= require('express').Router();
const User=require('../models/Customer')
const CryptoJS=require('crypto-js')
const jwt=require('jsonwebtoken')

router.post('/register',async(req,res)=>{
        console.log(req.body)
        try{
           await User.create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
           });
           res.json({status:'ok'})
        }catch(err) {
                console.log(err)
        res.json({status:'error',error:'Duplicate Email'})
        }
})

router.post('/login',async(req,res)=>{
   try{
        const user=await User.findOne({
           username:req.body.username
        });
        !user && res.status(401).json("Invalid credential")

        const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);

        const oriPassword=hashedPassword.toString(CryptoJS.enc.Utf8);

        oriPassword!==req.body.password && 
          res.status(401).json("Invalid credential")

          const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
          },process.env.JWT_KEY);

          const {password , ...others}=user._doc
        
        res.status(200).json({...others, accessToken});

      } catch (err){
        //res.status(500).json(err);
      }
})

module.exports=router;