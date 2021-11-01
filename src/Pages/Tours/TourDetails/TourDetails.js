import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import Rating from 'react-rating';

const TourDetails = () => {
    const { tourId } = useParams();
    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch(`https://pure-eyrie-69335.herokuapp.com/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setIds(data));
    }, [])

    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
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
                    <Button variant="outline-primary"><NavLink style={styles} to={`/myorders`}>Book Now</NavLink></Button>{' '}
                    <br />
                </div>
                <div className="container">
                    <img src={ids.img} width="70%" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default TourDetails;