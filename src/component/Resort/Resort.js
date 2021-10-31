import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Resort.css'

const Resort = (props) => {
    const { _id, title, guest, description, image } = props.resort;
    
    return (
        <div className="col-md-3 resort">
            <img src={image} alt="" />
            <h3> {title}</h3>
            <div className="d-flex justify-content-evenly p-2">
                <p> <i className="fas fa-user text-start"></i> Guest Number: </p>
                <p>{guest}</p>
            </div>
            <p className="px-4 py-2">{description.slice(0, 150)}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Resort;