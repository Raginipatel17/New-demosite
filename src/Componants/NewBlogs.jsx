import React from 'react';
import { imageList } from './Bloglist';
import NewCard from './newCard';

export function NewBlogs() {
  return (
    <div className='container-fluid '>
      <span className='text-warning fs-4'>Explore Our Blogs</span>
      <h2>Accelerate Digital Transformation</h2>
      <div className='row p-3' style={{display:"flex",justifyContent:"center"}}>
        {imageList.map((v,i)=>{
            return(
              <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 my-2 rounded-5' style={{width:"26em",height:"30em"}}><NewCard item={v} key={i} id={i}/></div>
            )
        })}
        </div>
    </div>
  )
}