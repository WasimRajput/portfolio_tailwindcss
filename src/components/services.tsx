import "../style/services.css"
import { FaGlobe, FaMobileAlt, FaPalette, FaCogs, FaShoppingCart, FaSearch } from 'react-icons/fa';

function Services(){
    return(
        <main className="main">
         <div className="ser-container">
                {/*top div */}           
            <div className="top-div-con">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">Building responsive, high-performance websites using modern web technologies</p>
            </div>
                
            <div className="boxes-con">
                {/*top div */}
                <div className="box">
                    <FaGlobe className="service-icon"/>
                <h2>Web Development Services</h2>
                <span>Building responsive, high-performance websites using modern web technologies.</span>
                </div>
                
                <div className="box">
                    <FaMobileAlt className="service-icon"/>
                <h2>Mobile App Design</h2>
                <span>Designing engaging, user-friendly mobile apps for iOS and Android.</span>
                </div>

                <div className="box">
                    <FaPalette className="service-icon"/>
                <h2>UI/UX Consultingo</h2>
                <span>Consulting to improve app design and user experience.</span>
                </div>

                <div className="box">
                    <FaCogs className="service-icon"/>
                <h2>API Integration Services</h2>
                <span>Integrating third-party APIs for seamless functionality.</span>
                </div>

                <div className="box">
                    <FaShoppingCart className="service-icon"/>
                <h2>E-commerce Solutions</h2>
                <span>Providing custom e-commerce solutions with secure payments</span>
                </div>

                <div className="box">
                    <FaSearch className="service-icon"/>
                <h2>SEO Optimization Services</h2>
                <span>Improving website visibility with SEO strategies</span>
                </div>

            </div>
        </div>
        </main>
    )
}

export default Services