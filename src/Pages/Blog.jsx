import React from 'react'
import {Explore} from '../Componants/Explore';
import {Header} from '../Componants/Header';
import {Footer} from '../Componants/footer';
import {Navbar} from '../Componants/Nav';
import {QNA} from '../Componants/Faq';
import { Carousel } from '../Componants/Carousel';
export default function Blog() {
  return (
    <div className="App">
          <Header/>
          <Navbar/>
         <QNA/>
         <Carousel/>
         <Footer/>
    </div>
  )
}