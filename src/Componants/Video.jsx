import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import video from "../styles/video.module.css";
import photo from '../images/video.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export function Video(){
    return(
        <div className={video.videooutersection}>
                        <div className={video.info}>
                            <h1 className={video.title}>About Our Video Interaction</h1>
                            <p className={video.about}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam quos officiis natus praesentium hic earum, voluptas ducimus et ut suscipit voluptatibus? Ad enim fuga et repellat nemo vitae, nisi 
                            </p>
                            <div className={video.explore}>
                                <div>
                                    <FontAwesomeIcon icon={faLightbulb} style={{color:"yellow",fontSize:"3em",display:"inline"}}/>
                                    <div  style={{display:"inline"}}>
                                        <h3 style={{display:"inline"}}>Explore Ideas Together</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, doloribus!</p>
                                    </div>                               
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faLightbulb} style={{color:"yellow",fontSize:"3em",display:"inline"}}/>
                                    <div  style={{display:"inline"}}>
                                        <h3 style={{display:"inline",margin:0}}>Explore Ideas Together</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, doloribus!</p>
                                    </div>  
                                </div>   
                            </div>
            </div>
                    <div className={video.youtube}>
                        <a  href="https://www.youtube.com/watch?v=X8BYu3dMKf0" target="_blank" rel="noopener noreferrer" >
                        {/* <FontAwesomeIcon icon={faYoutube}className={video.youtubelogo}/> */}
                         <img className={video.video}src={photo}/>
                        </a>
                    </div>
        </div>
    )
}