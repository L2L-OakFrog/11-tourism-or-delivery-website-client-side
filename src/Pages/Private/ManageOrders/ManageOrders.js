import axios from 'axios';
import React from 'react';
import useOrders from '../../../Hooks/UseOrders';

const ManageOrders = () => {
    const [orders] = useOrders();
    const deleteHandle = data => {
        const sure = window.confirm('Are you Sure?');
        if (sure) {
            axios.delete(`http://pure-eyrie-69335.herokuapp.com/orders/${data}`)
                .then(res => { })
        }
    }
    return (
        <div>
            <h1>Manage Your Orders</h1>
            <hr />
            <ul className="">
                {
                    orders.map(order =>
                        <li key={order._id}><h4>{order.booked}  <button onClick={() => deleteHandle(order._id)} className='ms-2'>X</button></h4></li>)
                }
            </ul>
        </div>
    );
};

export default ManageOrders;