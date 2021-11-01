import React from 'react';
import useUsers from '../../../Hooks/UseUsers';

const ManageUsers = () => {
    const [users] = useUsers();
    return (
        <div>
            <h1>Manage All Users</h1>
            <hr />
            <ul>
                {
                    users.map(user =>
                        <li key={user._id}><h4>Name: {user.fullName}, Email: {user.email}<button className='ms-2'>X</button></h4></li>)
                }
            </ul>
        </div>
    );
};

export default ManageUsers;