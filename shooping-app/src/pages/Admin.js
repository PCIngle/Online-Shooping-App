import React, { useEffect, useState } from 'react'
import { publicReq } from '../reqMethods';
import {Link} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const Admin = () => {
  const [productr , setProduct]=useState([]);

  useEffect(()=>{
        const getProduct=async()=>{
                try {
                        const getdata=await publicReq.get('/products');
                        //setProduct(getdata.data)
                       // getdata.send(getdata.data)
                        //console.log(getdata.data);
                        setProduct(getdata.data)
                } catch (error) { }
        };
        getProduct();
        
  },[])
  // Object.entries(product).map((prod,index)=>console.log(prod))
  const button=()=>{

  }
  return (
        <>
        <Navbar/>
    <div>
        <h1>Admin Panal</h1>
   
        <Link to='/addProduct'><button>Add Product</button></Link>

  <table>
        
        <tbody>
        <tr>
        {productr.map((id,index)=>(<tr key={index}>{id.title}
            <td>{<img src={id.img} alt='' height={'50px'}/>}</td>
        <td>{id._id}</td>
        
        <td>  $ {id.price}</td>
        <button>Update</button>
        <button onClick={button}>Delete</button>
        </tr>))} 
        </tr>
        </tbody>
  </table>



    </div>
    <Footer/>
    </>
  )
}

export default Admin