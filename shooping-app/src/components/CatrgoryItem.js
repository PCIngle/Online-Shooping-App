import React from 'react'
import {Link} from 'react-router-dom';
import '.././componentStyle/CatrgoyItem.css'


const CatrgoryItem = ({item}) => {
  return (
    <div>
        <div className='cont'>
            <Link to={`/products/${item.cat}`}>
           <img className='img' src={item.img} alt=''/>
           <div className='info'>
                <h1 className='title'>{item.title}</h1>
                <button className='button'>SHOP NOW</button>
           </div>
           </Link>
        </div>
    </div>
  )
}

export default CatrgoryItem
