import React from 'react';
import useAuth from '../../../Hooks/UseAuth';

const SeeOrders = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>{user?.displayName}'s Orders </h1>
            <hr />

        </div>
    );
};

export default SeeOrders;