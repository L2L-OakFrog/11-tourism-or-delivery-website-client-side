import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../../../Hooks/UseAuth';
import useTours from '../../../../../Hooks/UseTours';
import TourCards from './TourCards/TourCards';

const FewTours = () => {
    const [tours] = useTours();
    const { user, loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    const fewTours = tours.slice(0, 6);
    return (
        <Container>
            <Row>
                {
                    fewTours.map(tour =>
                        <TourCards
                            key={tour._id}
                            tour={tour}
                        ></TourCards>)
                }
            </Row>
        </Container>
    );
};

export default FewTours;