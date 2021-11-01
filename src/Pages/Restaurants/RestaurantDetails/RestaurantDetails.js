import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RestaurantDetails = () => {
    const { restauId } = useParams();
    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch(`https://pure-eyrie-69335.herokuapp.com/restaurants`)
            .then(res => res.json())
            .then(data => setIds(data));
    }, [])

    const details = ids?.find(d => d._id === restauId);
    console.log(details);
    return (
        <div>
            <h4>Name: {details?.name}</h4>
        </div>
    );
};

export default RestaurantDetails;