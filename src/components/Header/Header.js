import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/home'>Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/product'>Product</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active': undefined}  to='/users'>Users</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active': undefined}  to='/posts'>Posts</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active': undefined}  to='/about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;