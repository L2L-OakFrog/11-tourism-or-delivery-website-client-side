import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div sticky="bottom">
            <Container>
                <Row>
                    <Col>
                        <h3>DISCOVER</h3>
                        <hr />
                        <ul className="list-unstyled">
                            <li><h5><Link to="/about">About Us</Link></h5></li>
                            <li><h5><Link to="/gallery">Gallery</Link></h5></li>
                            <li><h5><Link to="/hotels">Hotels</Link></h5></li>
                            <li><h5><Link to="/tours">Tours</Link></h5></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Contact</h3>
                        <hr />
                        <ul className="list-unstyled">
                            <li><h5>Phone: +47 007 456 02</h5></li>
                            <li><h5>Email: web@oak-tours.com</h5></li>
                        </ul>
                    </Col>
                    {/* <Col><img src="https://image.freepik.com/free-vector/trip-concept-illustration_114360-1247.jpg" width="250" height="200" alt="" /></Col> */}
                </Row>
                <Row>
                    <hr />
                    <h1>OakTours</h1>
                    <p className='copyright'>Copyright &copy;{new Date().getFullYear()} OakTours / All Rights Reserved</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;