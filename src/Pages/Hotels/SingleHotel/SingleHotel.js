import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';

const SingleHotel = (props) => {
    const { _id, name, img, details, rating } = props.hotel;

    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    return (
        <Col xs={12} md={6} lg={4} className='mb-2'>
            <Card className='card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text>Ratings: <Rating
                        initialRating={rating}
                        emptySymbol='far fa-star'
                        fullSymbol="fas fa-star"
                        readonly></Rating></Card.Text>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to={`/hoteldetail/${_id}/`}>Details</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleHotel;