import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleRestaurant = (props) => {
    const { _id, name, img, details, rating, cost } = props.restaurant;

    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 doctor'>
            <Card className='doctors'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text>Costs: {cost}$</Card.Text>
                    <Card.Text>Rating: {rating}</Card.Text>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to={`/restaurantdetail/${_id}/`}>Details</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleRestaurant;