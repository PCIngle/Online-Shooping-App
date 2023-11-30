import React from 'react'
import { categories } from '../data'
import CatrgoryItem from './CatrgoryItem'
import '../index.css'


const Categories = () => {
  return (
    <div>
        <div className='Container1'>
           {categories.map((item)=>(
                <CatrgoryItem item={item} key={item.id} />
           ))}
        </div>
    </div>
  );
};

export default Categories