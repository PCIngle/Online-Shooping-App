const mongoose=require('mongoose') 

const CustomerSchema= new mongoose.Schema(
   {
        username:{type:String, required:true, unique:true,minlength:3},
        email:{type:String, required:true, unique:true, match:/.*@.*/  && /.com$/},
        password:{type:String, required:true},
        phone:{type:Number, required:true, minlength:9 , maxlength:10},
        isAdmin: {
                type: Boolean,
                default:false,
        },
   },
   { timestamps: true}
);

const customer=mongoose.model('Customer', CustomerSchema);

module.exports= customer;