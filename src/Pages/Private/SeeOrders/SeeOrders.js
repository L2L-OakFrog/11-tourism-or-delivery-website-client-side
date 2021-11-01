import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import useOrders from '../../../Hooks/UseOrders';

const SeeOrders = () => {
    const { user } = useAuth();
    const [orders] = useOrders();
    return (
        <div>
            <h1>{user?.displayName}'s Orders </h1>
            <hr />
            <ul className="list-unstyled">
                {
                    orders.map(order =>
                        <li key={order._id}><h4>{order.booked}</h4></li>)
                }
            </ul>
        </div>
    );
};

export default SeeOrders;