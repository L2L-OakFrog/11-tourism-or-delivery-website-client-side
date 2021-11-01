import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTours from '../../Hooks/UseTours';
import SingleTour from './SingleTour/SingleTour';

const Tours = () => {
    const [tours] = useTours();
    return (
        <Container>
            <Row>
                {
                    tours.map(tour =>
                        <SingleTour
                            key={tour._id}
                            tour={tour}
                        ></SingleTour>)
                }
            </Row>
        </Container>
    );
};

export default Tours;