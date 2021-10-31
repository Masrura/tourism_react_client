import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [control, setConrol] = useState(false);
    var pending;
    useEffect(() => {
        fetch(`https://damp-gorge-65015.herokuapp.com/manageOrders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control])
    
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://damp-gorge-65015.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
            console.log(id);
        }
    };
    const handleUpdate = (id) => {
        const proceed = window.confirm('Are you sure, you want to Aprove?');
        if (proceed) {
            fetch(`https://damp-gorge-65015.herokuapp.com/updateOrder/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
        }
    };
    return (
        <div className="row justify-content-center" style={{ marginBottom: '2%'}}>
            {
                //orders.map(order => <Order key={order._id} order={ order }></Order>)
                orders.length === 0 ?
                    <h3> No orders placed yet </h3>
                    :
                    orders.map(order =>
                        <div className="col-md-3 resort" key={ order._id}>
                            <img src={order.item.image} alt="" />
                            <h2>{order.item.title}</h2>
                            <h4> Ordered By: {order.name}</h4>
                            <p>{order.email}</p>
                            <p className={order.status === 'pending' ? "not-approved" : "approved"}>{order.status}</p>
                            <button style={{margin:'5px', color:'white'}}
                                onClick={() => handleDelete(order._id)}
                                className="btn bg-danger p-2"
                            >
                                Delete
                            </button>
                            {order.status === 'pending' && <button style={{ margin: '5px', color: 'white' }}
                                onClick={() => handleUpdate(order._id)}
                                className="btn bg-danger p-2"
                            >
                                Approve
                            </button> }
                        </div>
                    )
            }
        </div>
    );
};

export default ManageOrders;