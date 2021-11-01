import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HotelCards = (props) => {
    const { name, img, details } = props.hotel;

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
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to={`/hotels`}>See All</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HotelCards;