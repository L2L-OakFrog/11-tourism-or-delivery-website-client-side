import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../../../Hooks/UseAuth';
import useRestaurants from '../../../../../Hooks/UseRestaurants';
import RestaurantCards from './RestaurantCards/RestaurantCards';

const FewRestaurants = () => {
    const [restaurants] = useRestaurants();
    const fewRestaurants = restaurants.slice(0, 3);
    const { loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Container>
            <Row>
                {
                    fewRestaurants.map(restaurant =>
                        <RestaurantCards
                            key={restaurant._id}
                            restaurant={restaurant}
                        ></RestaurantCards>)
                }
            </Row>
        </Container>
    );
};

export default FewRestaurants;