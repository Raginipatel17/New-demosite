import { Card } from "./Card";
import section from "../styles/section.module.css";
import { services } from "./services";
export function PageSection(){   
    return(
        <div className={`${section.outersection}`}>
            <div>
                <span >WHY REGISTERKARO.IN</span>
                <h1>Why Choose Register Karo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat itaque, beatae ratione officiis et voluptatem odio dignissimos dolore. Illum.</p>
            </div>
            <div className="container-fluid">
            <div className="row d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 col-xl-4 m-0 "style={{width:"100%"}}>
            {services.map((v,i)=>{
                return(
                    <div className={`${section.carditem}  `} key={i}><Card item={v} /></div>

                )
            })}
            </div>
            </div>
        </div>

    )
}