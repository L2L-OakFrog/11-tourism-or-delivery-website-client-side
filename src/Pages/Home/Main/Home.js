import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../Main/home.css"

const Home = () => {
    return (
        <div className="container">
            <Container className='banner'>
                <div>
                    <h1>WelCome To OakTours!</h1>
                    <h5>The best place to look for planning a trip.</h5>
                    <br />
                    <Button variant="outline-primary"><NavLink to='/about'>Learn More</NavLink></Button>{' '}
                </div>
                <div className="container">
                    <img src="https://image.freepik.com/free-vector/trip-concept-illustration_114360-1247.jpg" width="50%" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Home;