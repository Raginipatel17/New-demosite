import  {coursetopic} from "./coursetopic.jsx";
import Exp from "../styles/explore.module.css";
export function Card({item}){
    return(
       <div className={`${Exp.card} mx-3`}>
            <div className={Exp.cardicon}>{item.icons}</div>
            <div className={Exp.title}>{item.topic}</div>
            <div className={Exp.desc}>{item.description}</div>
            <div><a href="#">Learn more &#10162;</a></div>
       </div> 

    )
}