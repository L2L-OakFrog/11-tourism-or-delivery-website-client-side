import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                {/* Logo & Name */}
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/4271/4271027.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} OakTours</Navbar.Brand>
                {/* Logo & Name */}

                {/* Responsive Toggle Navbar */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>

                        <NavDropdown title="Tours" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#featured-tours">Top Tours</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tours">All Tours</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Hotels" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#featured-hotels">Top Hotels</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/hotels">All Hotels</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Restaurants" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#featured-restaurants">Top Restaurants</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/restaurants">All Restaurants</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        {user?.email ?
                            <NavDropdown title={user?.displayName || `Welcome! ${user?.displayName}`} id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/myorders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/allorders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addtours">Add Tours</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addhotels">Add Hotels</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addrestaurants">Add Restaurants</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/users">Manage Users</NavDropdown.Item>
                            </NavDropdown> :
                            <Navbar.Text>Have an account?</Navbar.Text>
                        }
                        {user?.email ?
                            <Button onClick={logout} variant="light ms-2">Log out </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                {/* Responsive Toggle Navbar */}
            </Container>
        </Navbar >
    );
};

export default Header;