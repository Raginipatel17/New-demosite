import  {coursetopic} from "./coursetopic.jsx";
import Exp from "../styles/explore.module.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Card } from "./Card.jsx";

export function Explore(){
    return(
        <div className={`${Exp.outerdiv} container-fluid`}>
            <span style={{color:"orange",fontWeight:"bold"}}>Welcome To RegisteKro.in</span>
            <h1>Explore Our Services</h1>
        <div className={`${Exp.cards} row p-3`}>
            {coursetopic.map((item,index)=>{
                return(     
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 rounded-5' style={{width:"25em",height:"15em"}}>   
                    <Card item={item} key={index}/>
                    </div>
                       
                )

            })}
        </div>
        <button className={`${Exp.button} my-3`}><a href="#" style={{color:"white"}}>See All Services</a></button>
        </div>
    )
}