import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

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
                    <h5>Details: {ids?.details}</h5>
                    <h6>Ratings: {ids?.rating}</h6>
                    <h6>Price: {ids?.cost}$</h6>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to={`/myorders`}>Buy</NavLink></Button>{' '}
                    <br />
                </div>
                <div className="container">
                    <img src={ids.img} width="50%" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default TourDetails;