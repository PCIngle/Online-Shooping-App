const mongoose=require('mongoose') 

const ProductSchema= new mongoose.Schema(
   {
        img:{type:String, required:true},
        desc:{type:String, required:true, unique:true},
        title:{type:String, required:true, unique:true},
        categories:{type:Array},
        size:{type:Array},
        color:{type:Array},
        price:{type:Number, required:true},
        inStock:{type:Boolean, default:true}
   },
   { timestamps: true}
);

const product=mongoose.model('Product', ProductSchema);

module.exports= product;