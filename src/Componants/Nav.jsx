import Navstyle from '../styles/nav.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faSearch} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

import { NavLink } from 'react-router-dom';
export function Navbar(){
    let [status,setStatus]=useState(false);
    let Navfunction=()=>{
        setStatus(!status)
    }
    return(
        <>
        <div className={Navstyle.nav}>
            <Logo/>
            <Nav/>
            <button className={`bg-white text-black ${Navstyle.line} p-0` }onClick={Navfunction}>
                {
                    status?
                    <span className='mx-3 d-block' style={{width:"2em",height:"2em"}}>&times;</span>
                    :
                    <span className='mx-3 d-block' style={{width:"2em",height:"2em"}}>&#9776;</span>
                    
                }
            </button>
        </div>
            {
                status && (
                <div className='d-block bg-secondary-emphasis border border-secondary border-2 rounded-1'>
                        <div className='text-start border-bottom border-black border-2 px-4 fw-bold p-1'><NavLink to={'/'}>Home</NavLink></div>
                        <div className='text-start border-bottom border-black border-2 px-4 fw-bold p-1'><NavLink to={'/our-services'}>Our Services</NavLink></div>
                        <div className='text-start border-bottom border-black border-2 px-4 fw-bold p-1'><NavLink to={'/blog'}>Blog</NavLink></div>
                        <div className='text-start border-bottom border-black border-2 px-4 fw-bold p-1'><NavLink to={'/Contactus'}>Contact Us</NavLink></div>
                        <div className='text-start border-secondary border-2 px-4 fw-bold p-1'><NavLink to={'/Aboutus'}>About Us</NavLink></div>

                </div>
            )
            }
        </>
    )
    
}
function Logo(){
    return(
        <div className={Navstyle.logodiv}>
        <div className={Navstyle.logo}>
            <FontAwesomeIcon icon={faMailBulk}/>
            </div>
            <h1 >Register <span style={{color:'rgb(255, 201, 38)'}}>Karo</span></h1>
        </div>
    )
}
function Nav(){
    return(
        <div className={Navstyle.navbar}>
            
            <div className={Navstyle.links}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/our-services'}>Our Services</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
                <NavLink to={'/Contactus'}>Contact Us</NavLink>
                <NavLink to={'/Aboutus'}>About Us</NavLink>
                <FontAwesomeIcon icon={faSearch} className={Navstyle.icon}/>
                <button>Talk to Expert</button>
            </div>
        </div>
    )
}