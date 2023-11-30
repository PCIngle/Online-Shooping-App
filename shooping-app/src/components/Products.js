import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import '.././componentStyle/Products.css'

const Products = ({cat,filter,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredproducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async()=>{
      try {
        const res=await axios.get(
          cat
          ?`http://localhost:8000/api/products?catrgory=${cat}`
          :"http://localhost:8000/api/products")
       // console.log(res.data);
        setProducts(res.data)
      } catch (error) {
        
      };
    };
    getProducts()
  },[cat]);

  useEffect(()=>{
     cat && setFilteredProducts(
      products.filter((item)=>Object.entries(filter).every(([key,value])=>
        item[key].includes(value)
      ))
     )
  },[products,cat,filter])

  return (
    <div>
        <div className='cont1'>
              {cat ? filteredproducts.map((item)=>(
                <Product item={item} key={item._id} />
              )):products.map((item)=>(
                <Product item={item} key={item._id} />
              ))}
        </div>
    </div>
  )
}

export default Products