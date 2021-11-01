import React from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../Main/home.css"
import FewTours from './Featured/FewTours/FewTours';
import FewHotels from './Featured/FewHotels/FewHotels';
import FewRestaurants from './Featured/FewRestaurants/FewRestaurants';
import useAuth from '../../../Hooks/UseAuth';

const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "white",
    }
    return (
        <div className="container">
            <Container className='banner'>
                <div>
                    <h1>WelCome To OakTours!</h1>
                    <h5>The best place to look for planning a trip.</h5>
                    <br />
                    <Button variant="primary"><NavLink style={styles} to='/about'>Learn More</NavLink></Button>{' '}
                </div>
                <div className="container">
                    <img src="https://image.freepik.com/free-vector/trip-concept-illustration_114360-1247.jpg" width="50%" alt="" />
                </div>
            </Container>

            <Container id='featured-tours' className="container top-home">
                <hr />
                <h1>Our Top Tours</h1>
                <hr />
                <FewTours />
            </Container>

            <Container id='featured-hotels' className="container top-home">
                <hr />
                <h1>Our Top Hotels</h1>
                <hr />
                <FewHotels />
            </Container>

            <Container id='featured-restaurants' className="container top-home">
                <hr />
                <h1>Our Top Restaurants</h1>
                <hr />
                <FewRestaurants />
            </Container>
        </div>
    );
};

export default Home;