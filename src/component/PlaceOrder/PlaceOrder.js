import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [resort, setResort] = useState();
    const { user } = useAuth();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.item = resort;
        data.status = 'pending';
        fetch("https://damp-gorge-65015.herokuapp.com/place-order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Order Placed');
                    reset();
                }
            });
        reset();
    };

    useEffect(() => {
        fetch(`https://damp-gorge-65015.herokuapp.com/booking/${serviceId}`)
            .then(res => res.json())
            .then(data => setResort(data))
    }, [serviceId]);

    return (
        <div>
            <img src="/Accomodation-Banner.jpg" alt="" />
            <div className="row detail_main">
                <div className="col-md-7 detail">
                    <img src={resort?.image} alt="" />
                    <h2>Room Type : {resort?.title}</h2>
                    <div className="d-flex justify-content-evenly p-5">
                        <p> <i className="fas fa-user fa-2x text-start"></i> Guest Number: <span>{resort?.guest}</span></p>
                        
                    </div>
                    <p className="px-4 py-2">{resort?.description}</p>
                    <p className="px-4 py-2"><strong><u>Facilities : </u></strong>{resort?.facilities}</p>
                </div>
                <div className="col-md-4 my-5 py-5">
                    <h3 style={{color:'white', fontSize:'32px'}}> Place Order </h3>
                    <div className="detail_form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Your Name"
                                {...register("name", { required: true })} />
                            <input placeholder="Phone Number"
                                {...register("phone", { required: true })}
                                type="number"
                            />
                            <input placeholder="Address"
                                {...register("address", { required: true })} />
                            <input placeholder="Booking Date"
                                {...register("date")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className="btn btn-success" type="submit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlaceOrder;