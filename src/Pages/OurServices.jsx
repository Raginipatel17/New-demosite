import React from 'react'
import { PageSection } from '../Componants/Section';
import {Header} from '../Componants/Header';
import {Footer} from '../Componants/footer';
import {Navbar} from '../Componants/Nav';
import { Explore } from '../Componants/Explore';
import { NewBlogs } from '../Componants/NewBlogs';
export default function OurServices() {
  return (
    <div className="App">
          <Header/>
          <Navbar/>
          <Explore/>
          <NewBlogs/>
         <Footer/>
    </div>
  )
}