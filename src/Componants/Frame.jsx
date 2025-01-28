import photo from "../images/photo.jpg";
import framecss from "../styles/frame.module.css";
export function Frame(){
    return(
        <div className={framecss.frame}>
            <div className={framecss.info}>
                <span className={framecss.greeting}>WELCOME TO REGISTERKARO.IN</span>
                <h1 className={framecss.title}>About <span style={{color:"orange"}}>Register Karo</span></h1>
                <p className={framecss.about}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam quos officiis natus praesentium hic earum, voluptas ducimus et ut suscipit voluptatibus? Ad enim fuga et repellat nemo vitae, nisi laboriosam consequuntur corrupti itaque laudantium sed velit voluptate facere quod quis modi beatae est odit eveniet impedit pariatur molestias possimus! Asperiores quidem deserunt, cum quis tenetur sapiente 
                </p>
                <button className={framecss.learn}>
                <div>
                    <a href="#" className={framecss.learn}>Learn More &#10152;</a>
                </div>
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <img src={photo}></img>
            </div>
        </div>
    )
}