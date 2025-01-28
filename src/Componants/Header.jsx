import headerstyle from "../styles/header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faPinterest, faTwitter}from "@fortawesome/free-brands-svg-icons";
export function Header(){
    return(
    <div className={headerstyle.header}>

        <div className={headerstyle.iconsdiv}>
            <div className={headerstyle.phoneno} style={{display:"flex"}}>
                <span><a href="#">&#9993;</a></span>
                <a href="#" className={headerstyle.none}>www.registerkaro.in</a>
            </div>
            <div className={headerstyle.email} style={{display:"flex"}}>
                <span><a href="#">&#9990;</a></span>
                <a href="#" className={headerstyle.none}>+918447746183</a>
            </div>
            <div className={headerstyle.icons}>
                <a href='#'><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="#"><FontAwesomeIcon icon={faPinterest}/></a>

            </div>
            


        </div>
    </div>
    )
    
}