import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const [control, setConrol] = useState(false);
    console.log('user is ', user.email);

    useEffect(() => {
        fetch(`https://damp-gorge-65015.herokuapp.com/myOrders/${user.email}`)
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
    return (
        <div className="row justify-content-center main-div" style={{ marginBottom: '2%' }}>
            {
                //orders.map(order => <Order key={order._id} order={ order }></Order>)
                orders.length === 0 ?
                    <h3> No orders placed yet </h3>
                    :
                    orders.map(order =>
                        <div className="col-md-3 resort" key={ order._id}>
                            <img src={order.item.image} alt="" />
                            <h3>{order.item.title}</h3>
                            <h5>Ordered By: {order.name}</h5>
                            <p>{order.email}</p>
                            <p className={order.status ==='pending'? "not-approved" : "approved"}>{order.status}</p>
                            <button style={{color: 'white'}}
                                onClick={() => handleDelete(order._id)}
                                className="btn bg-danger p-2"
                            >
                                Delete
                            </button>
                        </div>
                    )
                
                    
            }
        </div>
    );
};

export default MyOrders;