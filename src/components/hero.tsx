import Image from "next/image";
import "../style/hero.css";


function Hero (){
    return(

        <div className="header-container">
            <div className="header-boxes-container">
                {/*Left */}
                <Image src={"/Images/my_pic.jpeg"}
                width={200}
                height={200}
                className="header-image"
                alt="Profile"/>

            <div className="hero-right-dev">
                {/*right */}
                <h1 className="title-hero">I'm Wasim Akram
                    Front-end Developer
                </h1>
                <p className="des-hero">
                Hi there! I'm Wasim Akram. I specialize in HTML,CSS,Javacript,and also in Typescript, and I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <button className="hero-btn">Hire Me</button>
            </div>
            </div>
        </div>
    )
}

export default Hero;