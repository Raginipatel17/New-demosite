import React from 'react'
import footerstyle from "../styles/footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export function Footer() {
    let scrolltop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
<>
    <div className={`${footerstyle.footer}`}>
        <div>
            <span className={footerstyle.span} style={{padding:"1em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis.</span>
            <a href='#'><FontAwesomeIcon icon={faFacebook} className={footerstyle.icon}/></a>
            <a href='#'><FontAwesomeIcon icon={faGoogle} className={footerstyle.icon}/></a>
            <a href='#'><FontAwesomeIcon icon={faApple} className={footerstyle.icon}/></a>
            <a href='#'><FontAwesomeIcon icon={faInstagram} className={footerstyle.icon}/></a>
        </div>
        <div>
            <h3 className={footerstyle.h3}>START A BUSSINESS</h3>
            <a href='#'><span className={footerstyle.span}>Features</span></a>
            <a href='#'><span className={footerstyle.span}>Solution</span></a>
            <a href='#'><span className={footerstyle.span}>Integration</span></a>
            <a href='#'><span className={footerstyle.span}>Enterprise</span></a>
            <a href='#'><span className={footerstyle.span}>Solutions</span></a>

        </div>
        <div>
            <h3 className={footerstyle.h3}>START A BUSSINESS</h3>
            <a href='#'><span className={footerstyle.span}>Features</span></a>
            <a href='#'><span className={footerstyle.span}>Solution</span></a>
            <a href='#'><span className={footerstyle.span}>Integration</span></a>
            <a href='#'><span className={footerstyle.span}>Enterprise</span></a>
            <a href='#'><span className={footerstyle.span}>Solutions</span></a>

        </div>
        <div>
            <h3 className={footerstyle.h3}>START A BUSSINESS</h3>
            <a href='#'><span className={footerstyle.span}>Features</span></a>
            <a href='#'><span className={footerstyle.span}>Solution</span></a>
            <a href='#'><span className={footerstyle.span}>Integration</span></a>
            <a href='#'><span className={footerstyle.span}>Enterprise</span></a>
            <a href='#'><span className={footerstyle.span}>Solutions</span></a>

        </div>
        <div>
            <h3 className={footerstyle.h3}>START A BUSSINESS</h3>
            <a href='#'><span className={footerstyle.span}>Features</span></a>
            <a href='#'><span className={footerstyle.span}>Solution</span></a>
            <a href='#'><span className={footerstyle.span}>Integration</span></a>
            <a href='#'><span className={footerstyle.span}>Enterprise</span></a>
            <a href='#'><span className={footerstyle.span}>Solutions</span></a>
        </div>
        </div>
        <div className='text-center text-white pb-2 m-0 ' style={{backgroundColor: "#011B5B"}} onClick={scrolltop}><FontAwesomeIcon icon={faArrowUp} className={`${footerstyle.top} bg-danger rounded-circle p-2`} style={{width:"1em",height:"1em",cursor:"pointer"}}/></div>
</>
  )
}