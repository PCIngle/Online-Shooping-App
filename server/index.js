const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv')
const userRoute=require('./routes/customer')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')
const cors=require("cors")

app.use(cors());

dotenv.config();
const port=process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });



  app.use(express.json());
  app.use('/api/auth', authRoute);
  app.use('/api/users', userRoute);
  app.use('/api/products', productRoute);
  app.use('/api/carts', cartRoute);
  app.use('/api/orders', orderRoute);


app.listen(port , () => {
  console.log(`server started at port ${port}`);
});
