import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useHotels from '../../../../../Hooks/UseHotels';
import HotelCards from './HotelCards/HotelCards';

const FewHotels = () => {
    const [hotels] = useHotels();
    const fewHotels = hotels.slice(0, 3);
    return (
        <Container>
            <Row>
                {
                    fewHotels.map(hotel =>
                        <HotelCards
                            key={hotel._id}
                            hotel={hotel}
                        ></HotelCards>)
                }
            </Row>
        </Container>
    );
};

export default FewHotels;