import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useHotels from '../../Hooks/UseHotels';
import SingleHotel from './SingleHotel/SingleHotel';

const Hotels = () => {
    const [hotels] = useHotels();
    return (
        <Container>
            <Row>
                {
                    hotels.map(hotel =>
                        <SingleHotel
                            key={hotel._id}
                            hotel={hotel}
                        ></SingleHotel>)
                }
            </Row>
        </Container>
    );
};

export default Hotels;