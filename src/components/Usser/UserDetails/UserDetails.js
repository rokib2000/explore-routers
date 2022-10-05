import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()

    const { name, phone,  email} = user
    return (<div>
        <h4>Name: {name}</h4>
            <p>Phone: { phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;