import React from 'react';
import useOrders from '../../../Hooks/UseOrders';

const ManageOrders = () => {
    const [orders] = useOrders();
    return (
        <div>
            <h1>Manage Your Orders</h1>
            <hr />
            <ul className="list-unstyled">
                {
                    orders.map(order =>
                        <li key={order._id}><h4>{order.name}</h4></li>)
                }
            </ul>
        </div>
    );
};

export default ManageOrders;