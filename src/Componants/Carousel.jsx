import { useState } from 'react';
import { reviews } from './reviews';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDiagramNext, faForward, faStar, faStarHalfStroke, faVideo } from "@fortawesome/free-solid-svg-icons";
import Firstpg from "../styles/firstpage.module.css";
import '../styles/Card.css'
export function Carousel(){
    let [status,setStatus]=useState(0);
      let index;
      // let [width,setwidth]=useState(false);
      let showslide=(n)=>{
        // setwidth(!width);
        if(status>=(reviews.length-1) && n!=-1){
          setStatus(0);
        }
        else if(status>(reviews.length)){
          setStatus(0);

        }
        else if(status<=0&& n==-1){    
          setStatus(reviews.length-1)
        }
        else{    
          setStatus(status+n);
        }
      }
      let fun=()=>{

        const carddiv=document.querySelector('.carousel');
        let pre=document.querySelector('.previous');
        pre.addEventListener('click',()=>{
          console.log("hii");
          carddiv.scrollBy({ left: -350, behavior: "smooth" });
          showslide(-1);
          
        })
          let next=document.querySelector('.next');
          next.addEventListener('click',()=>{
            carddiv.scrollBy({ left: 350, behavior: "smooth" });
            showslide(1);
          })
      }
      return (
    <>

          <div style={{display:"flex",gap:"0.5em",justifyContent:"center"}}> 
            <h1 className='text-center'>Customer Reviews</h1>
          <span className='previous rounded-circle bg-danger m-2'onClick={fun}><FontAwesomeIcon icon={faArrowLeft}/></span>
          <span className='next rounded-circle bg-danger m-2' onClick={fun}><FontAwesomeIcon icon={faArrowRight}/></span>
          </div> 
        <div className="carousel">
          <div className="carddiv">
            {
              reviews.map((v,i)=>{
                index=i;
                return(
                  <div className={`${status===index?'show active' : 'hide'}`} key={i}><Card value={v} /></div>
    
                )
              })
            }
          </div>
          
          </div>
          </>
          )
}


function Card({value}){
    return(
              <div className="card-body">
                {/* <div className={Firstpg.rating}> */}
                            <span><span className={Firstpg.ratingtext}>Review Rating</span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orangered"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:"orangered"}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:'orangered'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:'orangered'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color:'orangered'}}/>
                            
                            </span>
                            {/* </div> */}
                <p className="card-text">{value.review}</p>
              <img src={value.profilePhoto} className="card-img-top" alt="..."/>
                <h5 className="card-title">{value.username}</h5>
              </div>

    )
}