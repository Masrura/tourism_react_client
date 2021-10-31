import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (
        <div style={{ borderTop: '1px solid grey', paddingTop: '2%'}}>
            <h1 style={{ marginTop: '2%', }}>Gallery</h1>
            <div className="row gallery" style={{ marginTop: '2%', }}>
                <div className="col-md-3 my-3">
                    <img src="room4.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="pool.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="nature1.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="room1.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="Accomodation-Banner.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="room2.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="flower.jpg" alt="" />
                </div>
                <div className="col-md-3 my-3">
                    <img src="room3.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;