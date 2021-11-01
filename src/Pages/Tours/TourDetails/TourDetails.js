import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const TourDetails = () => {
    const { tourId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();

    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch(`https://pure-eyrie-69335.herokuapp.com/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setIds(data));
    }, [])

    const onSubmitHotels = data => {
        axios.post('https://pure-eyrie-69335.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }

    // const details = ids?.find(d => d._id === tourId);
    // console.log(ids);
    return (
        <div className='container'>
            <h1>Showing Details of: {ids?.name}</h1>
            <hr />
            <Container className='flexing'>
                <div>
                    <h1>Name: {ids?.name}</h1>
                    <br />
                    <p>{ids?.details}</p>
                    <h5>Ratings: <Rating
                        initialRating={ids?.rating}
                        emptySymbol='far fa-star'
                        fullSymbol="fas fa-star"
                        readonly></Rating></h5>
                    <br />
                    <h5>Price: {ids?.cost}$</h5>
                    <br />
                    <br />
                </div>
                <div className="container">
                    <img src={ids.img} width="70%" alt="" />
                </div>
            </Container>
            <div className='adding'>
                <hr />
                <h1>Add Required information's</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmitHotels)}>
                    <input placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true })} />
                    <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="Bookings" defaultValue={ids?.name} {...register("booked", { required: true })} />
                    <input placeholder="Phone" {...register("phone", { required: true })} />
                    <input type="submit" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default TourDetails;