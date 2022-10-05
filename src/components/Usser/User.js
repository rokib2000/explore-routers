import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({ user }) => {
    console.log(user);
    const {id, name, phone, username, email} = user
    return (
        <div className='user'>
            <h4>Name: {name}</h4>
            <p>Phone: { phone}</p>
            <p>Email: {email}</p>
            <p>Username: <Link to={`/users/${id}`}>{ username}</Link></p>
        </div>
    );
};

export default User;