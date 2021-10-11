import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link to='/' className="simple-text">
                    Simple Dashboard
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/addrestaurant'>
                        <i className="nc-icon nc-bank"></i>
                        <p>Add Restaurant</p>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/viewrestaurant'>
                        <i className="nc-icon nc-circle-09"></i>
                        <p>View Restaurants</p>
                    </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Sidebar;