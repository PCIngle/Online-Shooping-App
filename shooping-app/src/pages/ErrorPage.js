import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
        <>
    <div>Page Not Found....</div>
    <Link to='/'>
    <button style={{color:'blue'}}>Go back</button>
    </Link>
    </>
  )
}

export default ErrorPage;