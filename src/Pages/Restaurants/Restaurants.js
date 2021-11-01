import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useRestaurants from '../../Hooks/UseRestaurants';
import SingleRestaurant from './SingleRestaurant/SingleRestaurant';

const Restaurants = () => {
    const [restaurants] = useRestaurants();
    return (
        <Container>
            <Row>
                {
                    restaurants.map(restaurant =>
                        <SingleRestaurant
                            key={restaurant._id}
                            restaurant={restaurant}
                        ></SingleRestaurant>)
                }
            </Row>
        </Container>
    );
};

export default Restaurants;