import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { login, error, signInUsingGoogle, handleName, handleEmail, handlePassword, handleLogin, handleRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <Button onClick={handleGoogle} variant="primary" type="submit">
                Google Login
            </Button>
        </div>
    );
};

export default Login;