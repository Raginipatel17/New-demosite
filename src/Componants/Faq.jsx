import { useState } from 'react';
import {faqs} from './Qna.jsx';
import faqstyle from "../styles/faq.module.css"

export function QNA(){
    let [status,setStatus]=useState(faqs[0].id);
    let faqitems=faqs.map((v,i)=>{
        let Items={
            v,
            status,
            setStatus
        }
        return(<QNAItems items={Items} key={i}/>)
        
    })
    return(
        <div className='container-fluid mx-0'>
        <div className={`${faqstyle.Qna}`}>
        <h1 className='text-center'>Frequently Asked Question (F&Q)</h1>
            <div className='row d-flex justify-content-center'>{faqitems}</div>
        </div>
        </div>
    )
    
   
}
function QNAItems({items}){
    let {v,status,setStatus}=items
    return(
        <div className={faqstyle.Faqsection}>
            <h3 className={faqstyle.Question} onClick={()=>setStatus(v.id)}>{v.question}</h3>
            <p className={ `Answer   ${status==v.id?"AnswerShow":""}`}>{v.answer}</p>
          </div>
          
      
    )

}