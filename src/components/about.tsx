import Image from "next/image";
import "@/style/about.css"
import "../style/hero.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



function About (){
    return(

        <div className="header-container">
            <div className="header-boxes-container">
                {/*Left */}
                <Image src={"/Images/my_pic.jpeg"}
                width={200}
                height={200}
                className="header-image"
                alt="Profile"/>
                <div className="social-icon">
                    
                <AiFillTikTok className="s-icon"/>
                <FaFacebookSquare className="f-icon"/>
                <AiFillInstagram className="i-icon"/>
                </div>

            <div className="hero-right-dev">
                {/*right */}
                <h1 className="title-hero">About Us
                </h1>
                <p className="des-hero">
                My approach combines a keen eye for detail with a focus on usability, ensuring seamless and intuitive experiences for end-users. I’m committed to continuous learning and always excited to explore new technologies and best practices to refine my craft.</p>
                <button className="hero-btn">Hire Me</button>
            </div>
            </div>
        </div>
    )
}

export default About;