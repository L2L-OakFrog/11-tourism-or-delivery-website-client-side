import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';

const About = () => {
    const color = {
        color: "white",
    }
    const size = {
        width: "50%",
    }
    return (
        <Container>
            <h1>Welcome To OakTours</h1>
            <p>We are here here for to make your tours easy and fun with exciting experiences.</p>
            <hr />
            <Row>
                <Carousel style={size} className='carousels showing' variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/travel-landmark-concept-poster-print_1284-13615.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-vector/summer-landscape-vertical-banners-set_1284-10796.jpg?size=626&ext=jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/nature-landscapes-travel-flat-banners-set_1284-11568.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-vector/safari-tourists-enjoying-adventure-travel-watching-animals-taking-pictures-african-landscape-flora-fauna-vector-illustration-jeep-tour-kenya-savannah-journey_74855-8561.jpg?size=338&ext=jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container >
    );
};

export default About;