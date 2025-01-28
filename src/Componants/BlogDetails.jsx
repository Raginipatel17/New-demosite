import React from 'react';
import {useLocation} from 'react-router-dom';
import {imageList} from './Bloglist';
import { Header } from './Header';
import {Navbar} from '../Componants/Nav';
import { Footer } from './footer';
import { details } from './Details';
export default function BlogDetails() {
    let uselocation=useLocation();
    let currentid=uselocation.pathname.split('/')[2];
    let currentdata=imageList.filter((i)=>i.id==currentid)[0];
    console.log(currentdata);
    let detail=details.filter((i)=>i.id==currentid)[0];
    console.log(detail);
  return (
    <div>
    <Header/>
    <Navbar/>
    <div className='p-3'>
    <h1 className='text-center'>{currentdata.title}</h1>
    <div className='text-center '>
    <img src={currentdata.image} style={{width:"18em"}}/>
    </div>
    <div className='fs-5'>{detail.detail}</div>
    </div>
    <Footer/>
    </div>
  )
}
