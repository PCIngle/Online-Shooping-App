const mongoose=require('mongoose') 

const CartSchema= new mongoose.Schema(
   {
        userId:{type:String, required:true},
        products:[
            {
                productId:{
                        type:String,
                },
                quantity:{
                        type:String,
                        default:1,
                },
            },
        ],
   },
   { timestamps: true}
);

const cart=mongoose.model('Cart', CartSchema);

module.exports= cart;