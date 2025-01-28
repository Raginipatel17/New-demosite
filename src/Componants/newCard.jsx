import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NewCard({item,id}) {
    let service=item.services;
    
  return (
    <div className="border text-center">
        <div className='m-0'>
        <img src={item.image}  alt="..." className='img-fluid m-0'style={{width:"100%",height:"100%"}}/></div>
        <div className="card-body text-center" style={{width:"100%"}}>
            <div className="card-title text-start">{item.user}</div>
            <h5 className="card-title text-start">{item.title} <span><NavLink to={`/blog/${id}`}>&#8599;</NavLink></span></h5>
            
            <p className="card-text text-start" style={{height:"4em"}}>{item.description}</p>
            <div className="card-text text-start wy-1 m-0">
                {service.map((v,i)=>{
                    return(
                        <span className="bg-danger m-1 p-1 rounded-pill text-white" style={{fontSize:"12px"}} key={i}>{v}</span>

                    )
                })}
            </div>

        </div>
    </div>
  )
}