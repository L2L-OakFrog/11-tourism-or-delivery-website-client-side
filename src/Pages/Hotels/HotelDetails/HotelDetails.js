import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const HotelDetails = () => {
    const { hotelId } = useParams();
    const [ids, setIds] = useState({});
    useEffect(() => {
        fetch(`https://pure-eyrie-69335.herokuapp.com/hotels/${hotelId}`)
            .then(res => res.json())
            .then(data => {
                setIds(data);
                console.log(data);
            });
    }, [])

    // const details = ids?.find(d => d._id === hotelId);
    // console.log(details);
    console.log(ids);
    return (
        <div>
            <h4>Name: {ids?.name}</h4>
        </div>
    );
};

export default HotelDetails;