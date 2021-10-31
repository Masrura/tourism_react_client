import React from 'react';
import './Welcome.css'
const Welcome = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)"}}>
            <div style={{marginTop:"3%", borderTop:"1px solid gray"}}>
                <h2 style={{marginTop:"2%"}} className="animate__animated animate__bounce"> <strong> Glimpse of Our Facilities </strong></h2>
                <div className="services">

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="restaurent.jpg" alt="" />
                        </div>
                        <div className="col-md-6 animate-right">
                            <h2>Our Restaurent</h2>
                            <p>
                                The planning and designing of Sairu has been a challenging task. The location is hilly with no chunk of plane land. There was the concern that construction could damage the pristine beauty of Nature unless it blended with the topography keeping the contours intact. Sairu was constructed, to the delight of the partners with utmost sensitivity, the only exception being the driveway which had to be scrapped and curved out of the hill.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center list">
                        <div className="col-md-6 animate-left">
                            <h2>Swimming Pool</h2>
                            <p> SAIRU Hill Resorts is set against the spectacular greenery covered hill range of Bandarban in the Chittagong Hill Tracts, renowned for its natural beauty and considered as the heart of Buddhist culture within Bangladesh. Bandarban is a district in the South-Eastern part of Bangladesh and regarded as one of the most attractive travel places in the country.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="pool.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="conference.png" alt="" />
                        </div>
                        <div className="col-md-6 animate-right">
                            <h2>Conference Room</h2>
                            <p>
                                SAIRU Hill Resorts is set against the spectacular greenery covered hill range of Bandarban in the Chittagong Hill Tracts, renowned for its natural beauty and considered as the heart of Buddhist culture within Bangladesh. Bandarban is a district in the South-Eastern part of Bangladesh and regarded as one of the most attractive travel places in the country.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;