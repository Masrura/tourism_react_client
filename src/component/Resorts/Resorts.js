import React, { useEffect, useState } from 'react';
import Resort from '../Resort/Resort';

const Resorts = () => {
    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch('https://damp-gorge-65015.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    },[])

    return (
        <div className="row justify-content-center">
            {
                resorts.map(resort => <Resort key ={resort._id } resort={ resort}></Resort>)
            }
        </div>
    );
};

export default Resorts;