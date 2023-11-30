import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Payment = () => {
     const navigate=useNavigate();  
     const navigateHome=()=>{
        navigate('/')
     } 
  return (
        <>
    <h1>Payment Successfull</h1>
    <button onClick={navigateHome}>Back to Home</button>
    </>
  )
}
