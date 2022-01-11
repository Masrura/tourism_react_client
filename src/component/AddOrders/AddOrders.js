import React from 'react';
import { useForm } from "react-hook-form";
import './AddOrders.css'

const AddOrders = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://secret-scrubland-17703.herokuapp.com/add-service", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Service Added Successfully');
                    reset();
                }
            });
        console.log('ordered data', data);
        reset();
    };
    return (
        <div className="add_form">
            <h2> Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Service Name" {...register("title", { required: true })} />
            
                <input placeholder="No of Guest" {...register("guest", { required: true })}
                type="number" />
                <textarea placeholder="Description" {...register("description", { required: true })}
                 />
                <textarea placeholder="Facilities" {...register("facilities", { required: true })} />
                <input placeholder="Image URL" {...register("image", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
            
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddOrders;