import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Firstpg from "../styles/firstpage.module.css";
import { faBox, faHandshake, faPeopleArrows, faPeopleGroup, faPlay, faPlayCircle, faStar, faStarHalfStroke, faVideo } from "@fortawesome/free-solid-svg-icons";
export function Firstpage(){
    return(
        <div className={`${Firstpg.display}`}>
            <div className={Firstpg.displaydiv}>
            <div className={Firstpg.rating}>
            <span><FontAwesomeIcon icon={faStar}/><span className={Firstpg.ratingtext}>Google Rating</span>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            </span>
            </div>
            
            <div className={Firstpg.titlepart}>
            <h1 className={Firstpg.title}>Your Trusted patner<br/>for compliance bussiness need</h1>
            <hr style={{color:"red",width:"20em",textAlign:"left"}}></hr>
            <p className={Firstpg.titledis}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellendus sed debitis aliquam vero ratione autem fugiat omnis explicabo? Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum voluptatem culpa officia minima ullam ipsum explicabo facilis perspiciatis sequi.</p>
            </div>
            <div className={Firstpg.about}>
            <span><FontAwesomeIcon icon={faStar}/><h3 >4.5+<p style={{fontSize:"0.5em",margin:"0px",textAlign:"center"}}>Customer Support</p></h3></span>
            <span><FontAwesomeIcon icon={faPeopleGroup}/><h3>20,000+<p style={{fontSize:"0.5em",margin:"0px",textAlign:"center"}}>Clients</p></h3></span>
            <span><FontAwesomeIcon icon={faHandshake} /><h3>99.8%<p style={{fontSize:"0.5em",margin:"0px",textAlign:"center"}}>Financial Stability</p></h3></span>
            </div>
            <div className={Firstpg.action}>
            <button ><a href="#">Talk To Expert</a></button>
            <a href="https://www.youtube.com/watch?v=mwPLdLF2G0M"><FontAwesomeIcon icon={faPlayCircle}style={{cursor:"pointer",color:"orangered"}} /><p style={{fontSize:"1em",fontWeight:"bold",textAlign:"center",margin:"0.5em",display:"inline"}}>See how it works</p></a>
            </div>
            </div>
    </div>
    )
    
}