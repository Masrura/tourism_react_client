import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: "url('/banner.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
            <div className="banner-inner">
                <h1>GreenLand Resort</h1>
                <h3>We offer you the perfect blend of nature with
                    luxurious accommodation facilities at Bandarban</h3>
            </div>
           
        </div>
    );
};

export default Banner;