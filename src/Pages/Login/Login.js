import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                const data = result._tokenResponse;
                axios.post('https://pure-eyrie-69335.herokuapp.com/users', data)
                    .then(res => { })
                history.push(redirect_url);
            })
    }
    // const onSubmitUsers = data => {
    //     
    //         .then(res => {
    //             console.log(res);
    //         })
    // }
    return (
        <Container>
            <Row className='showinglogin'>
                <Col>
                    <h1>Login with Google</h1>
                    <br />
                    <Button onClick={handleGoogle} variant="primary" type="submit">
                        Google Login
                    </Button>
                </Col>
                <Col>
                    <img className="w-75" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5375.jpg" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Login;