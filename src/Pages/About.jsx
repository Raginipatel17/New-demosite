import React from 'react'
import {Frame} from '../Componants/Frame';
import {Header} from '../Componants/Header';
import {Footer} from '../Componants/footer';
import {Navbar} from '../Componants/Nav';
import { PageSection } from '../Componants/Section';
export default function Aboutus() {
  return (
    <div className="App">
          <Header/>
          <Navbar/>
          <Frame/>
          <PageSection/>
         <Footer/>
        </div>
  )
}